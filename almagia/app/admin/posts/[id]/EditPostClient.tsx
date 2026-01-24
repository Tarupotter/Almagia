"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function handleImageChange(file: File | null) {
    setImageFile(file);

    if (previewUrl) URL.revokeObjectURL(previewUrl);

    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  }

  async function onSubmit(values: PostFormValues) {
    try {
      let imageUrl = initialValues.imageUrl;

      if (imageFile) {
        imageUrl = await uploadBlogImage(imageFile);
      }

      await updatePostAction(id, {
        ...values,
        imageUrl,
      });

      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setImageFile(null);

      alert("Ändringar sparade!");

      router.refresh();
    } catch (e) {
      console.error(e);
      alert("Kunde inte spara ändringar");
    }
  }

  async function onDelete() {
    const ok = confirm("Är du säker på att du vill ta bort inlägget?");
    if (!ok) return;

    try {
      await deletePostAction(id);
      router.push("/admin/posts");
      router.refresh();
    } catch (e) {
      console.error(e);
      alert("Kunde inte ta bort inlägg");
    }
  }

  const imageToShow = previewUrl ?? initialValues.imageUrl;

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Redigera inlägg</h1>

      {imageToShow && (
        <img
          src={imageToShow}
          alt="Bild"
          className="w-full max-w-md rounded-2xl object-cover"
        />
      )}

      <PostForm
        initialValues={{
          title: initialValues.title,
          content: initialValues.content,
          published: initialValues.published,
        }}
        submitLabel="Spara ändringar"
        showDelete
        onSubmit={onSubmit}
        onDelete={onDelete}
        onImageChange={handleImageChange}
      />
    </div>
  );
}
