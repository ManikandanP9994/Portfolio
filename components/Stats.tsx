import { Briefcase, Code2, Flame, GraduationCap, Users } from "lucide-react";
import { stats } from "@/lib/content";

const icons = {
  briefcase: Briefcase,
  users: Users,
  code: Code2,
  grad: GraduationCap,
  flame: Flame,
};

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
      <div className="glass grid gap-3 rounded-3xl p-3 sm:grid-cols-5">
        {stats.map((stat) => {
          const Icon = icons[stat.icon as keyof typeof icons];
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl px-3 py-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-500/15 text-sky-300">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400">{stat.label}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
