import Link from "next/link";

type BlogPreviewProps = {
  id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  imageUrl?: string;
};

export default function BlogPreview({
  id,
  title,
  excerpt,
  publishedAt,
  imageUrl,
}: BlogPreviewProps) {
  return (
    <Link
      href={`/blog/${id}`}
      className="block rounded-3xl bg-white/60 p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="space-y-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="h-56 w-full rounded-2xl object-cover"
          />
        )}

        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {publishedAt && (
            <p className="text-xs text-gray-500 border-b border-gray-300 pb-1 mt-2">{publishedAt}</p>
          )}
        </div>

        {excerpt && <p className="text-sm text-gray-700 break-words">{excerpt}</p>}

        <span className="inline-block text-sm underline text-gray-700">
          Läs mer
        </span>
      </div>
    </Link>
  );
}
