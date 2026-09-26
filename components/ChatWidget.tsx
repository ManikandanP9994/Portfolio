"use client";

import { Loader2, Minus, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Tell me about Mani",
  "List his projects",
  "What are his skills?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Mani's AI assistant. Ask me about his skills, projects or experience.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setMessages([...next, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Chat request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: assistant }]);
      }
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Something went wrong talking to the assistant.";
      setMessages([
        ...next,
        {
          role: "assistant",
          content: msg.includes("NVIDIA_API_KEY")
            ? "The chatbot needs an NVIDIA API key. Add NVIDIA_API_KEY to .env.local and restart the server."
            : msg,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(37,99,235,0.45)]"
      >
        <Sparkles className="h-4 w-4" />
        AI Assistant
      </button>
    );
  }

  return (
    <aside className="glass fixed bottom-5 right-5 z-50 flex h-[420px] w-[min(100%-1.5rem,340px)] flex-col overflow-hidden rounded-3xl">
      <header className="flex items-center justify-between border-b border-cyan-400/15 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-500/20 text-sky-300">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">AI Assistant</p>
            <p className="text-[11px] text-emerald-400">● Online</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Minimize chatbot"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 hover:bg-white/10"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Close chatbot"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3 text-sm">
        {messages.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={`max-w-[90%] rounded-2xl px-3 py-2 ${
              m.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-white/5 text-slate-100"
            }`}
          >
            {m.content || (busy ? "…" : "")}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex flex-wrap gap-1.5 px-3 pb-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => void send(s)}
            className="rounded-full border border-cyan-400/20 px-2.5 py-1 text-[11px] text-sky-200 hover:bg-white/5"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-cyan-400/15 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 rounded-xl border border-cyan-400/15 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          disabled={busy}
          className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 disabled:opacity-50"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </form>
    </aside>
  );
}
