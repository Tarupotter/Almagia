"use client";

import { useState } from "react";
import PostForm, { PostFormValues } from "@/components/admin/PostForm";

async function handleSubmit(values: PostFormValues) {
  await fetch("/api/admin/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  alert("Inlägg sparat!");
}



export default function NewPostPage() {

  return (
    <div className="space-y-6">
    <h1 className="text-xl">Nytt blogginlägg</h1>

    <PostForm
      submitLabel="Spara inlägg"
      onSubmit={handleSubmit}
    />
  </div>
  );
}
