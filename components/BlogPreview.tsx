import Link from "next/link";
import { posts } from "@/lib/content";

export function BlogPreview() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold">
          From the <span className="text-sky-400">Blog</span>
        </h2>
        <Link href="/blog" className="text-sm text-sky-300">
          All posts →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="glass rounded-2xl p-5">
            <p className="text-xs text-sky-400">{post.date}</p>
            <h3 className="mt-1 font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
