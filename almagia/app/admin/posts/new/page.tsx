"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Nytt blogginlägg</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Titel"
          className="w-full rounded-xl border border-gray-300 p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Innehåll"
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
          Publicera direkt
        </label>

        <Button onClick={() => alert("Sparas senare via backend")}>
          Spara inlägg
        </Button>
      </div>
    </div>
  );
}
