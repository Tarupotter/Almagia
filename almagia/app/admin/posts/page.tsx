import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function AdminPostsPage() {

  const { data: posts, error } = await supabase
    .from("posts")
    .select("id,title,created_at,published")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Kunde inte ladda inlägg.</p>;
  }

  const safePosts = posts ?? [];

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

      {safePosts.length === 0 ? (
        <p className="text-sm text-gray-600">Inga inlägg ännu.</p>
      ) : (
        <ul className="space-y-3">
          {safePosts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between rounded-2xl bg-white/60 p-4"
            >
              <div>
                <p className="font-medium">{post.title}</p>
                {post.created_at && (
                  <p className="text-xs text-gray-500">
                    {String(post.created_at).slice(0, 10)}
                  </p>
                )}
              </div>

              <Link href={`/admin/posts/${post.id}`} className="text-sm underline">
                Redigera
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
