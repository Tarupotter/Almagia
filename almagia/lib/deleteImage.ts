import { supabase } from "@/lib/supabaseClient";

export async function deleteBlogImageByPublicUrl(publicUrl: string) {
  const marker = "/storage/v1/object/public/blog-images/";
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return; 

  const path = publicUrl.slice(idx + marker.length);

  const { error } = await supabase.storage.from("blog-images").remove([path]);
  if (error) throw new Error(error.message);
}
