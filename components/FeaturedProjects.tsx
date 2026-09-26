import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-400">
            FEATURED PROJECTS
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            AI <span className="text-sky-400">Projects</span>
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            A showcase of my recent AI and full stack projects.
          </p>
        </div>
        <Link
          href="/projects"
          className="text-sm text-sky-300 hover:text-white"
        >
          View All Projects →
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="glass overflow-hidden rounded-3xl"
          >
            <div className="relative h-40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1280px) 397px, (min-width: 1024px) calc((100vw - 88px) / 3), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide">
                Featured
              </span>
            </div>
            <div className="space-y-3 p-5">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-xs text-sky-300">{project.subtitle}</p>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/20 bg-sky-500/10 px-2.5 py-1 text-[11px] text-sky-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-xs font-semibold"
              >
                View Project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
