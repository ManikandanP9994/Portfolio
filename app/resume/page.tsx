import { PrintButton } from "@/components/PrintButton";
import { education, experience, profile, projects, skills } from "@/lib/content";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-10 text-slate-100 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <PrintButton />
      </div>
      <p className="text-sky-300">{profile.role}</p>
      <p className="mt-1 text-sm text-slate-400">
        {profile.email} · {profile.location}
      </p>
      <p className="mt-4 text-sm leading-7">{profile.about}</p>

      <h2 className="mt-8 text-xl font-semibold">Experience</h2>
      {experience.map((job) => (
        <div key={job.role} className="mt-3">
          <p className="font-medium">
            {job.role}{" "}
            <span className="text-sm text-slate-400">({job.period})</span>
          </p>
          <ul className="mt-1 list-disc pl-5 text-sm text-slate-300">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="mt-8 text-xl font-semibold">Education</h2>
      {education.map((ed) => (
        <p key={ed.school} className="mt-2 text-sm">
          {ed.school} · {ed.period} · {ed.detail}
        </p>
      ))}

      <h2 className="mt-8 text-xl font-semibold">Projects</h2>
      {projects.map((p) => (
        <p key={p.slug} className="mt-2 text-sm">
          <strong>{p.title}</strong> — {p.description}
        </p>
      ))}

      <h2 className="mt-8 text-xl font-semibold">Skills</h2>
      <p className="mt-2 text-sm">{skills.map((s) => s.name).join(" · ")}</p>
    </main>
  );
}
