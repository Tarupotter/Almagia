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
