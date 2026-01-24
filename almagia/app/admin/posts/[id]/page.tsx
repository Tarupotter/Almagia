import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import EditPostClient from "./EditPostClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("id,title,content,published,imageUrl")
    .eq("id", id)
    .single();

  if (error || !post) notFound();

  return (
    <EditPostClient
      id={post.id}
      initialValues={{
        title: post.title,
        content: post.content,
        published: post.published,
        imageUrl: post.imageUrl ?? undefined,
      }}
    />
  );
}
