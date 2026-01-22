import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) { 

  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id },
  });

  // Visa inte opublicerade inlägg publikt
  if (!post || !post.published) {
    notFound();
  }

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
