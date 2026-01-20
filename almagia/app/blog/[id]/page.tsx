import BlogPost from "@/components/blog/BlogPost";
import Link from "next/link";

export default function BlogPostPage({
  params,
}: {
  params: { id: string };
}) { const post = {
  title: "Första blogginlägget",
  content:
    "Här kommer du kunna skriva vad du än vill samt lägga foton om du vill.",
  imageUrl: "/flowersinhand.jpeg",
};

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      

        <BlogPost {...post} /> 
        <Link
        href="/blog"
        className="inline-block text-sm underline hover:opacity-80"
      >
        ← Tillbaka
      </Link>
        <p className="text-center text-xs text-gray-500">ID: {params.id}</p>
    </main>
  );
}
