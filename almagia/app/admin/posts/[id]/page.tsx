"use client";

import { useState } from "react";
import PostForm from "@/components/admin/PostForm";

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

      <PostForm
        initialValues={mockPost}
        submitLabel="Spara ändringar"
        showDelete
        onSubmit={() => alert("Uppdateras senare via backend")}
        onDelete={() => alert("Tas bort senare via backend")}
      />
    </div>
  );
}
