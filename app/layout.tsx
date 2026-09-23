import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manikandan P — AI Engineer",
  description:
    "AI Engineer portfolio focused on Agentic AI, Generative AI, RAG, LLM applications and production-style backend systems.",
  metadataBase: new URL("https://manikandanp9994.netlify.app"),
  openGraph: {
    title: "Manikandan P — AI Engineer",
    description: "Agentic AI • Generative AI • RAG • LLM Engineering",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}