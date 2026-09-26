import Image from "next/image";
import { education, experience, profile } from "@/lib/content";

export function AboutExperienceContact() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-24 sm:px-6 lg:grid-cols-3">
      <article id="about" className="glass rounded-3xl p-5">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src="/images/about-portrait.png"
            alt={profile.name}
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>
        <p className="text-sm leading-7 text-slate-300">{profile.about}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {profile.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-xl border border-cyan-400/15 bg-sky-500/10 px-3 py-2 text-xs text-sky-100"
            >
              {trait}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-5 inline-flex text-sm text-sky-300 hover:text-white"
        >
          Learn More →
        </a>
      </article>

      <article id="experience" className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold">Experience</h2>
        {experience.map((job) => (
          <div key={job.role} className="mt-4 border-l-2 border-sky-500/50 pl-4">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">{job.role}</h3>
              {job.current ? (
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  Current
                </span>
              ) : null}
            </div>
            <p className="text-xs text-slate-400">{job.period}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {job.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
        {education.map((ed) => (
          <div key={ed.school} className="mt-5 border-l-2 border-blue-500/40 pl-4">
            <h3 className="font-semibold">{ed.school}</h3>
            <p className="text-xs text-slate-400">{ed.period}</p>
            <p className="mt-1 text-sm text-slate-300">{ed.detail}</p>
          </div>
        ))}
      </article>

      <article id="contact" className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold">Let&apos;s Build Something Amazing</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          I&apos;m open to job opportunities, collaborations and freelance
          projects. Feel free to reach out!
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold"
          >
            Send Me a Message
          </a>
          <a
            href={profile.resumePath}
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-5 space-y-1 text-xs text-slate-400">
          <p>{profile.email}</p>
          <p>{profile.github.replace("https://", "")}</p>
          <p>{profile.linkedin.replace("https://", "")}</p>
          <p>{profile.location}</p>
        </div>
      </article>
    </section>
  );
}
