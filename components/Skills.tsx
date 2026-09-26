import {
  Box,
  Braces,
  Container,
  Cpu,
  Database,
  GitBranch,
  Hexagon,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import { skills } from "@/lib/content";

const skillIcons = [
  Cpu,
  Braces,
  Hexagon,
  Workflow,
  Network,
  Sparkles,
  Box,
  Sparkles,
  Container,
  Database,
  Database,
  GitBranch,
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.2em] text-sky-400">
        TECHNICAL SKILLS
      </p>
      <h2 className="mt-1 text-3xl font-bold">
        Skills <span className="text-sky-400">& Tools</span>
      </h2>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
        {skills.map((skill, i) => {
          const Icon = skillIcons[i] ?? Cpu;
          return (
            <div
              key={skill.name}
              className="glass flex flex-col items-center gap-2 rounded-2xl px-2 py-4 text-center"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl bg-black/30"
                style={{ color: skill.color }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] text-slate-200">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
