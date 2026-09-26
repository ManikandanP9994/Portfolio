import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/lib/content";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="mesh-bg min-h-full flex flex-col text-foreground">
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
