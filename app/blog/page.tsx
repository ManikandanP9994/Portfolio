import Link from "next/link";
import { posts } from "@/lib/content";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-10 sm:px-6">
      <Link href="/#blog" className="text-sm text-sky-300">
        ← Back home
      </Link>
      <h1 className="mt-4 text-4xl font-bold">Blog</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="glass rounded-2xl p-6">
            <p className="text-xs text-sky-400">{post.date}</p>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
