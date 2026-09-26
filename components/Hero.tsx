import Image from "next/image";
import {
  Brain,
  BriefcaseBusiness,
  Database,
  GitMerge,
  Layers,
  Mail,
  MessageCircle,
} from "lucide-react";
import { profile, stackCards } from "@/lib/content";

const icons = {
  brain: Brain,
  nodes: GitMerge,
  database: Database,
  layers: Layers,
};

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6">
      <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.7fr_1.15fr]">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-300">
            HELLO, I&apos;M
          </p>
          <h1 className="glow-text text-4xl font-extrabold leading-tight sm:text-6xl">
            Manikandan{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              P
            </span>
          </h1>
          <p className="text-sky-300">{profile.role}</p>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.45)]"
            >
              View My Projects →
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-3 pt-1">
            {[
              { href: profile.linkedin, label: "LinkedIn", Icon: BriefcaseBusiness },
              { href: profile.twitter, label: "Twitter", Icon: MessageCircle },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-white/5 text-sky-200 hover:bg-sky-500/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {stackCards.map((card) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <div
                key={card.title}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/15 text-sky-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{card.title}</span>
                  <span className="text-xs text-slate-400">{card.subtitle}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 shadow-[0_0_80px_rgba(37,99,235,0.25)]">
          <Image
            src="/images/hero-desk.png"
            alt="Developer workstation at night"
            width={1200}
            height={800}
            className="h-[340px] w-full object-cover sm:h-[420px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/70 via-transparent to-transparent" />
          <blockquote className="absolute bottom-5 right-5 max-w-[210px] rounded-2xl border border-cyan-300/30 bg-[#071226]/75 p-4 text-sm italic text-sky-50 backdrop-blur">
            “Building Intelligent Solutions for a Better Tomorrow.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
