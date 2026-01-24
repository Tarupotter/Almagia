"use client";

import { useState } from "react";
import PostForm, { PostFormValues } from "@/components/admin/PostForm";
import { deletePostAction, updatePostAction } from "../actions";
import { uploadBlogImage } from "@/lib/uploadImage";

type EditInitialValues = PostFormValues & {
  imageUrl?: string;
};

export default function EditPostClient({
  id,
  initialValues,
}: {
  id: string;
  initialValues: EditInitialValues;
}) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  async function onSubmit(values: PostFormValues) {
    try {
      setIsSaving(true);

      let imageUrl: string | undefined = initialValues.imageUrl;

      if (imageFile) {
        imageUrl = await uploadBlogImage(imageFile);
      }

      await updatePostAction(id, {
        ...values,
        imageUrl,
      });

      alert("Ändringar sparade!");
      setImageFile(null);
    } catch (e) {
      console.error(e);
      alert("Kunde inte spara ändringar");
    } finally {
      setIsSaving(false);
    }
  }

  async function onDelete() {
    const ok = confirm("Är du säker på att du vill ta bort inlägget?");
    if (!ok) return;

    try {
      await deletePostAction(id);
      window.location.href = "/admin/posts";
    } catch (e) {
      console.error(e);
      alert("Kunde inte ta bort inlägg");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Redigera inlägg</h1>

      {initialValues.imageUrl && (
        <img
          src={initialValues.imageUrl}
          alt="Nuvarande bild"
          className="w-full max-w-md rounded-2xl object-cover"
        />
      )}

      <PostForm
        initialValues={{
          title: initialValues.title,
          content: initialValues.content,
          published: initialValues.published,
        }}
        submitLabel={isSaving ? "Sparar..." : "Spara ändringar"}
        showDelete
        onSubmit={onSubmit}
        onDelete={onDelete}
        onImageChange={setImageFile}
      />
    </div>
  );
}
