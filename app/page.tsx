 "use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, BrainCircuit, CheckCircle2, Code2, Database, Github,
  Linkedin, Mail, MapPin, Menu, Network, Server, Sparkles, X
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Autonomous Software Engineering Agent",
    label: "FLAGSHIP • AGENTIC AI",
    description:
      "A multi-agent software engineering workflow that coordinates research, planning, coding, testing, review and verification with self-correction and human approval checkpoints.",
    stack: ["Python", "LangGraph", "LangChain", "LLMs", "FastAPI", "Docker", "Git/GitHub"],
    github: "https://github.com/ManikandanP9994",
    accent: "from-cyan-400/20 to-blue-500/5"
  },
  {
    title: "E-Commerce Sentiment Analysis Engine — Sentipulse",
    label: "NLP • PRODUCTION-STYLE",
    description:
      "Full-stack review intelligence platform using transformer-based deep learning for extraction, sentiment classification and confidence analytics.",
    stack: ["Python", "FastAPI", "Hugging Face", "PyTorch", "PostgreSQL", "Redis", "React", "Docker"],
    github: "https://github.com/ManikandanP9994/Sentipulse",
    live: "https://sentipulse-ecom.netlify.app",
    accent: "from-violet-400/20 to-fuchsia-500/5"
  },
  {
    title: "Medi+ Wellness — AI Healthcare Platform",
    label: "LLM • BACKEND ENGINEERING",
    description:
      "Healthcare appointment and assistant platform combining conversational AI with concurrency-safe booking infrastructure.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker", "Hugging Face"],
    github: "https://github.com/ManikandanP9994/Mediplus",
    live: "https://mediplus-hospital.netlify.app",
    accent: "from-emerald-400/15 to-cyan-500/5"
  }
];

const skills = [
  ["Agentic AI", "LangGraph • LangChain • tool calling • memory • HITL"],
  ["Generative AI", "LLMs • prompt/context engineering • RAG"],
  ["ML / NLP", "Hugging Face Transformers • PyTorch • NLP • sentiment"],
  ["Backend", "Python • FastAPI • REST APIs • JSON/HTTP"],
  ["Data", "PostgreSQL • MySQL • Redis • FAISS • ChromaDB"],
  ["Engineering", "Docker • AWS • Linux • Git/GitHub • CI/CD"],
  ["Frontend", "React.js • Next.js • TypeScript • JavaScript"],
  ["CS Fundamentals", "Data Structures & Algorithms • SQL • debugging"]
];

const skillIcons = [
  BrainCircuit,
  Code2,
  Database,
  Server,
  Sparkles,
  Network,
  CheckCircle2,
  Code2
];

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-20 grid-bg opacity-70" />
      <div className="fixed left-1/2 top-[-18rem] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="fixed right-[-10rem] top-[35rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />

      <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl">
          <a href="#home" className="font-semibold tracking-tight">
            <span className="text-cyan-300">M</span>P<span className="text-white/30">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((x) => (
              <a key={x} href={`#${x.toLowerCase()}`} className="transition hover:text-white">{x}</a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="mailto:p.mani9485@gmail.com" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100">Let&apos;s talk</a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((x) => (
              <a onClick={() => setOpen(false)} key={x} href={`#${x.toLowerCase()}`} className="block rounded-xl px-3 py-3 text-white/70 hover:bg-white/5 hover:text-white">{x}</a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32">
        <div className="w-full">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="mb-7 inline-flex items-center gap-2 rounded-full pill px-4 py-2 text-xs text-white/65">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
            AI Engineer • Agentic AI • Generative AI
          </motion.div>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}} className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-7xl">
            I build AI systems that <span className="text-gradient">reason, act and ship.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.16}} className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            AI Engineer focused on multi-step agent workflows, LLM applications, RAG, NLP and production-style backend systems using Python, FastAPI and modern AI tooling.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.24}} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-cyan-100">View projects <ArrowUpRight size={17}/></a>
            <a href="/Manikandan-P-AI-Engineer-Resume.pdf" className="inline-flex items-center gap-2 rounded-xl pill px-5 py-3 font-semibold text-white/85 hover:bg-white/10">Resume <ArrowUpRight size={17}/></a>
          </motion.div>
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[["03","AI projects"],["04+","AI/LLM domains"],["08","skill clusters"],["2025","AI focus"]].map(([n,l])=>(
              <div key={l} className="glass rounded-2xl p-4">
                <div className="text-2xl font-semibold">{n}</div>
                <div className="mt-1 text-xs text-white/40">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300/80">01 / About</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Engineering mindset, AI-first execution.</h2>
          </div>
          <div className="glass rounded-3xl p-7 text-white/60 leading-8">
            I combine software engineering fundamentals with applied AI to build systems that move beyond demos. My current focus is agentic workflows, retrieval, transformer-based NLP, API design, data persistence and reliable deployment.
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[["Human-in-the-loop","Approval checkpoints for controlled execution"],["Self-correction","Failure analysis and retry loops"],["API-first","FastAPI services and JSON/HTTP contracts"],["Deployment","Docker/Linux and Git-based delivery"]].map(([a,b])=>(
                <div key={a} className="rounded-2xl border border-white/8 bg-white/[.025] p-4">
                  <div className="flex items-center gap-2 font-medium text-white"><CheckCircle2 size={16} className="text-cyan-300"/>{a}</div>
                  <p className="mt-2 text-sm leading-6 text-white/45">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300/80">02 / Experience</p>
        <div className="mt-8 glass rounded-3xl p-7 md:p-9">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">React Developer</h3>
              <p className="mt-1 text-white/45">Hezee Access IT Infrastructure Pvt Ltd • Bengaluru</p>
            </div>
            <div className="text-sm text-white/40">Oct 2025 — May 2026</div>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              "Built scalable React.js/Next.js applications integrated with secure JSON-based REST APIs and reusable components.",
              "Developed a hotel booking calendar supporting real-time scheduling, reservation management and conflict detection.",
              "Used Git/GitHub and Agile practices, including debugging and code review, for collaborative software delivery."
            ].map((x,i)=><div key={i} className="rounded-2xl border border-white/8 bg-black/15 p-5 text-sm leading-7 text-white/55"><span className="text-cyan-300">0{i+1}</span><br/>{x}</div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300/80">03 / Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">AI systems with real engineering depth.</h2>
          </div>
          <a href="https://github.com/ManikandanP9994" className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white">GitHub <ArrowUpRight size={16}/></a>
        </div>
        <div className="mt-10 grid gap-5">
          {projects.map((p,i)=>(
            <motion.article whileHover={{y:-4}} key={p.title} className={`glass glow relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.accent} p-7 md:p-9`}>
              <div className="absolute right-6 top-6 text-white/10"><Network size={80}/></div>
              <div className="relative">
                <div className="text-xs font-semibold tracking-[.18em] text-cyan-300/80">{p.label}</div>
                <h3 className="mt-3 max-w-2xl text-2xl font-semibold">{p.title}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/55">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="pill rounded-full px-3 py-1.5 text-xs text-white/55">{s}</span>)}</div>
                <div className="mt-7 flex gap-4 text-sm">
                  <a href={p.github} className="inline-flex items-center gap-2 text-white/75 hover:text-white"><Github size={16}/> GitHub</a>
                  {p.live && <a href={p.live} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"><ArrowUpRight size={16}/> Live demo</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300/80">04 / Skills</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">The stack behind the systems.</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(([a,b],i)=> {
            const Icon = skillIcons[i] ?? Code2;

            return (
              <div key={a} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/[.06]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
                  <Icon size={19} />
                </div>
                <h3 className="font-semibold">{a}</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">{b}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="glass glow overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-cyan-300/80">05 / Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s build something intelligent.</h2>
            <p className="mt-5 leading-7 text-white/50">Open to AI Engineer, Agentic AI and AI Product Engineering opportunities.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:p.mani9485@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black"><Mail size={17}/> Email</a>
              <a href="https://linkedin.com/in/manikandan-p-434250221" className="inline-flex items-center gap-2 rounded-xl pill px-5 py-3 font-semibold"><Linkedin size={17}/> LinkedIn</a>
              <a href="https://github.com/ManikandanP9994" className="inline-flex items-center gap-2 rounded-xl pill px-5 py-3 font-semibold"><Github size={17}/> GitHub</a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/35"><MapPin size={15}/> Bengaluru, India</div>
          </div>
        </div>
        <footer className="flex flex-col justify-between gap-3 py-8 text-xs text-white/25 sm:flex-row">
          <span>© 2026 Manikandan P. Built with Next.js, TypeScript & Tailwind CSS.</span>
          <span>Agentic AI • GenAI • RAG • NLP</span>
        </footer>
      </section>
    </main>
  );
}