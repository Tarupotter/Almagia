"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const mockPost = {
  title: "Vad är healing?",
  content:
    "Healing är ett energiarbete som syftar till att skapa balans i kropp och själ.",
  published: true,
};

export default function EditPostPage() {
  const [title, setTitle] = useState(mockPost.title);
  const [content, setContent] = useState(mockPost.content);
  const [published, setPublished] = useState(mockPost.published);

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Redigera inlägg</h1>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full rounded-xl border border-gray-300 p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={8}
          className="w-full rounded-xl border border-gray-300 p-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Publicerad
        </label>

        <div className="flex gap-3">
          <Button onClick={() => alert("Uppdateras senare via backend")}>
            Spara ändringar
          </Button>

          <button className="text-sm text-red-600 underline">
            Ta bort inlägg
          </button>
        </div>
      </div>
    </div>
  );
}
