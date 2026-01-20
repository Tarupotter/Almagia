"use client";

import { useState } from "react";
import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  return (
    <div className="space-y-6">
    <h1 className="text-xl">Nytt blogginlägg</h1>

    <PostForm
      submitLabel="Spara inlägg"
      onSubmit={() => alert("Sparas senare via backend")}
    />
  </div>
  );
}
