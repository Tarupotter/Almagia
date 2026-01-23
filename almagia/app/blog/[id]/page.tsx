import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { id: string }
}) { 

  const { id } = params;

  const { data: post, error } = await supabase
  .from("posts")
  .select("id,title,content,imageUrl,published")
  .eq("id", id)
  .single();

if (error || !post || !post.published) notFound();

  return (
    <main className="mx-auto max-w-4xl mt-12 px-6 py-16 space-y-6">
      
        <BlogPost title={post.title}
        content={post.content}
        imageUrl={post.imageUrl ?? undefined} /> 
        <Link
        href="/blog"
        className="inline-block text-sm underline hover:opacity-80"
      >
        ← Tillbaka
      </Link>

    </main>
  );
}
