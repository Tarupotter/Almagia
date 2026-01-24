"use client";

import { useState } from "react";
import { createPostAction } from "../actions";
import PostForm, { PostFormValues } from "@/components/admin/PostForm";
import { uploadBlogImage } from "@/lib/uploadImage";

export default function NewPostPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);

  async function handleSubmit(values: PostFormValues) {
    try {
      let imageUrl: string | undefined = undefined;

      if (imageFile) {
        imageUrl = await uploadBlogImage(imageFile);
      }

      await createPostAction({ ...values, imageUrl });
      alert("Inlägg sparat!");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert("Något gick fel vid uppladdning eller sparande.");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Nytt blogginlägg</h1>

      <PostForm
        submitLabel="Spara inlägg"
        onSubmit={handleSubmit}
        onImageChange={setImageFile}
      />
    </div>
  );
}
