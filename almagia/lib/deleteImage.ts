import { supabase } from "@/lib/supabaseClient";

/**
 * Tar en publicUrl från Supabase storage och raderar motsvarande object.
 * Kräver att du har delete-policy i storage.objects för bucket.
 */
export async function deleteBlogImageByPublicUrl(publicUrl: string) {
  const marker = "/storage/v1/object/public/blog-images/";
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return; // inte en blog-images url eller redan annan url

  const path = publicUrl.slice(idx + marker.length); // t.ex. "posts/abc.jpg"

  const { error } = await supabase.storage.from("blog-images").remove([path]);
  if (error) throw new Error(error.message);
}
