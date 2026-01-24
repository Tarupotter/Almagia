import { supabase } from "@/lib/supabaseClient";

export async function uploadBlogImage(file: File) {
  
  const ext = file.name.split(".").pop() || "jpg";
  const fileName = `${crypto.randomUUID()}.${ext}`;
  const filePath = `posts/${fileName}`;

  const { error } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);
  return data.publicUrl;
}
