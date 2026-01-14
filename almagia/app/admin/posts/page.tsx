import Link from "next/link";

const mockPosts = [
  { id: "1", title: "Vad är healing?", date: "2026-01-10" },
  { id: "2", title: "Energi och balans", date: "2026-01-08" },
];

export default function AdminPostsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Blogginlägg</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-full bg-[#CFC3B5] px-4 py-2 text-sm"
        >
          Nytt inlägg
        </Link>
      </div>

      {mockPosts.length === 0 ? (
        <p className="text-sm text-gray-600">Inga inlägg ännu.</p>
      ) : (
        <ul className="space-y-3">
          {mockPosts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between rounded-2xl bg-white/60 p-4"
            >
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>

              <Link
                href={`/admin/posts/${post.id}`}
                className="text-sm underline"
              >
                Redigera
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
