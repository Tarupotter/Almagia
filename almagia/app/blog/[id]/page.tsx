import BlogPost from "@/components/blog/BlogPost";

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
    <main className="py-20">
        <BlogPost {...post} />
        <p className="mt-6 text-center text-xs text-gray-500">ID: {params.id}</p>
    </main>
  );
}
