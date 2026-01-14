import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <aside className="rounded-3xl bg-white/60 p-6 shadow-sm">
            <h2 className="mb-6 text-xl">Admin</h2>

            <nav className="space-y-3 text-sm">
              <Link className="block hover:opacity-70" href="/admin">Startsida</Link>
              <Link className="block hover:opacity-70" href="/admin/posts">Blogginlägg</Link>
              <Link className="block hover:opacity-70" href="/admin/posts/new">Nytt inlägg</Link>
              <Link className="block hover:opacity-70" href="/admin/reviews">Recensioner</Link>
              <Link className="block hover:opacity-70" href="/admin/about">Om mig</Link>
            </nav>
          </aside>

          <main className="rounded-3xl bg-white/60 p-8 shadow-sm">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
