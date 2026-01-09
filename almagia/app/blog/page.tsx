import BlogPost from "@/components/BlogPost";

export default function BlogPage() {
  const mockPost = {
    title: "Första blogginlägget",
    content: "Här kommer du kunna skriva vad du än vill samt lägga foton om du vill",
    imageUrl: "/flowersinhand.jpeg",
  };

  return (
    <main className="py-20">
      <BlogPost {...mockPost} />
    </main>
  );
}
