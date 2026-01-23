"use client";

import { createPostAction } from "../actions";
import PostForm, { PostFormValues } from "@/components/admin/PostForm";

async function handleSubmit(values: PostFormValues) {
  try {
    await createPostAction(values);
    alert("Inlägg sparat!");
  } catch (err) {
    alert("Något gick fel");
    console.error(err);
  }
}


export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl">Nytt blogginlägg</h1>

      <PostForm submitLabel="Spara inlägg" onSubmit={handleSubmit} />
    </div>
  );
}
