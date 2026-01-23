"use client";

import PostForm, { PostFormValues } from "@/components/admin/PostForm";
import { deletePostAction, updatePostAction } from "../actions";

export default function EditPostClient({
  id,
  initialValues,
}: {
  id: string;
  initialValues: PostFormValues;
}) {
  async function onSubmit(values: PostFormValues) {
    try {
      await updatePostAction(id, values);
      alert("Ändringar sparade!");
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
      window.location.href = "/admin/posts";
    } catch (e) {
      console.error(e);
      alert("Kunde inte ta bort inlägg");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Redigera inlägg</h1>

      <PostForm
        initialValues={initialValues}
        submitLabel="Spara ändringar"
        showDelete
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
    </div>
  );
}
