"use client";

import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      light ? "#eef4ff" : "#040814",
    );
    document.documentElement.style.setProperty(
      "--foreground",
      light ? "#0b1b33" : "#e8f0ff",
    );
  }, [light]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-cyan-400/10 ${
        scrolled ? "bg-[#050b18]/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white shadow-[0_0_24px_rgba(37,99,235,0.55)]">
            MP
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{profile.name}</span>
            <span className="block text-[11px] text-sky-300/80">
              {profile.headline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-cyan-400/15 bg-[#071226]/70 px-2 py-1.5 text-sm text-slate-200 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 transition hover:text-white ${
                i === 0
                  ? "nav-pill bg-gradient-to-r from-blue-600 to-sky-500 text-white"
                  : "hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={profile.resumePath}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-100 hover:bg-sky-500/20 sm:px-4"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download Resume</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setLight((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-cyan-400/20 bg-white/5 text-sky-200"
          >
            {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-cyan-400/20 bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav className="grid gap-1 border-t border-cyan-400/10 bg-[#050b18]/95 px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
