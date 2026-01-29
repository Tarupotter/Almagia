import { supabase } from "@/lib/supabaseClient";
import BlogPreview from "@/components/blog/BlogPreview";
import { lovers } from "../fonts";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id,title,content,imageUrl,published,createdAt")
    .eq("published", true)
    .order("createdAt", { ascending: false });

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p>Kunde inte ladda blogginlägg.</p>
      </main>
    );
  }

  const safePosts = posts ?? [];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-10">
      <header className="text-center space-y-2">
        <h1 className={`${lovers.className} text-3xl md:text-6xl`}>Almagia blogg</h1>
        <h1 className={`${lovers.className} text-2xl md:text-4xl`}>Här delar jag tankar, healing och inspiration</h1>
      </header>

      <ul className="space-y-4">
        {safePosts.map((post) => (
          <li key={post.id}>
            <BlogPreview
              id={post.id}
              title={post.title}
              excerpt={post.content?.slice(0, 140) + "..."}
              publishedAt={
                post.createdAt ? String(post.createdAt).slice(0, 10) : undefined
              }
              imageUrl={post.imageUrl ?? undefined}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
