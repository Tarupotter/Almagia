"use client";

import { useMemo, useState } from "react";
import BlogPreview from "@/components/blog/BlogPreview";

type Post = {
  id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  imageUrl?: string;
};

const demoPosts: Post[] = [
  {
    id: "1",
    title: "Första blogginlägget",
    excerpt:
      "Här kommer du kunna skriva vad du vill samt lägga foton om du vill.",
    publishedAt: "2026-01-14",
    imageUrl: "/flowersinhand.jpeg",
  },
  {
    id: "2",
    title: "Vad är healing?",
    excerpt: "En kort introduktion till energiarbete och återhämtning.",
    publishedAt: "2026-01-10",
  },
  {
    id: "3",
    title: "Energi & balans",
    excerpt: "Små steg i vardagen som hjälper kroppen att landa.",
    publishedAt: "2026-01-05",
  },
  {
    id: "4",
    title: "Trygghet i sessionen",
    excerpt: "Hur en behandling kan kännas och vad du kan förvänta dig.",
    publishedAt: "2025-12-20",
  },
];

export default function BlogPage() {
  const posts = demoPosts; // senare ska detta komma från backend

  const STEP = 3;
  const [visibleCount, setVisibleCount] = useState(STEP);

  /* usememo sparar ett beräknat värde så React slipper räkna om det i onödan.
  Om posts har ändrats:
  räkna om sortedPosts
   Annars:
      använd gamla värdet */
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const ad = a.publishedAt ? Date.parse(a.publishedAt) : 0;
      const bd = b.publishedAt ? Date.parse(b.publishedAt) : 0;
      return bd - ad;
    });
  }, [posts]);

  const visiblePosts = sortedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPosts.length;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Blogg</h1>
        <p className="text-gray-700">Nyaste inläggen visas högst upp.</p>
      </header>

      <ul className="space-y-4">
        {visiblePosts.map((post) => (
          <li key={post.id}>
            <BlogPreview {...post} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center pt-4">
        {hasMore ? (
          <button
            type="button"
            className="rounded-full bg-white/60 px-6 py-3 text-sm shadow-sm hover:shadow-md transition"
            onClick={() => setVisibleCount((c) => c + STEP)}
          >
            Visa äldre inlägg
          </button>
        ) : (
          <p className="text-sm text-gray-600">Du har nått slutet.</p>
        )}
      </div>
    </main>
  );
}
