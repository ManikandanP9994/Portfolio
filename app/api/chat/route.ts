import OpenAI from "openai";
import { chatSystemPrompt } from "@/lib/content";

export const runtime = "nodejs";

type IncomingMessage = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "NVIDIA_API_KEY is missing. Add it to .env.local." },
      { status: 500 },
    );
  }

  const body = (await req.json()) as { messages?: IncomingMessage[] };
  const messages = (body.messages ?? []).filter(
    (m) => m.role === "user" || m.role === "assistant",
  );

  const client = new OpenAI({
    apiKey,
    baseURL: "https://integrate.api.nvidia.com/v1",
  });

  const stream = await client.chat.completions.create({
    model: process.env.NVIDIA_MODEL ?? "meta/llama-3.1-8b-instruct",
    temperature: 0.5,
    max_tokens: 700,
    stream: true,
    messages: [{ role: "system", content: chatSystemPrompt }, ...messages],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (error) {
        controller.enqueue(
          encoder.encode(
            error instanceof Error
              ? `\n${error.message}`
              : "\nNVIDIA chat stream failed.",
          ),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
