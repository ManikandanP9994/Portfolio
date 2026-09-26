import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-10 sm:px-6">
      <Link href="/#projects" className="text-sm text-sky-300">
        ← Back home
      </Link>
      <h1 className="mt-4 text-4xl font-bold">All Projects</h1>
      <p className="mt-2 text-slate-400">
        Featured AI and full-stack work from Manikandan P.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="glass overflow-hidden rounded-3xl">
            <div className="relative h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-5">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-sky-300">{project.subtitle}</p>
              <p className="text-sm text-slate-300">{project.description}</p>
              <a href={project.href} className="inline-block text-sm text-sky-300">
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
