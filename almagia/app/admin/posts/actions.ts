"use server";

import { supabase } from "@/lib/supabaseClient";

export async function createPostAction(values: {
  title: string;
  content: string;
  published: boolean;
}) {
  const { error } = await supabase.from("posts").insert({
    title: values.title,
    content: values.content,
    published: values.published,
  });

  if (error) throw new Error(error.message);
}

export async function updatePostAction(
  id: string,
  values: {
    title: string;
    content: string;
    published: boolean;
  }
) {
  const { error } = await supabase
    .from("posts")
    .update({
      title: values.title,
      content: values.content,
      published: values.published,
      updatedAt: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
}


export async function deletePostAction(id: string) {
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
