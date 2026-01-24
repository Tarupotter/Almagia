"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export type PostFormValues = {
  title: string;
  content: string;
  published: boolean;
};

type PostFormProps = {
  initialValues?: PostFormValues;
  submitLabel: string;
  onSubmit: (values: PostFormValues) => void;
  showDelete?: boolean;
  onDelete?: () => void;
  onImageChange?: (file: File | null) => void;
};

export default function PostForm({
  initialValues = { title: "", content: "", published: false },
  submitLabel,
  onSubmit,
  showDelete = false,
  onDelete,
  onImageChange,
}: PostFormProps) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [published, setPublished] = useState(initialValues.published);

  const canSubmit = title.trim().length > 0 && content.trim().length > 0;

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <label className="text-sm text-gray-700">Titel</label>
        <input
          type="text"
          placeholder="Titel"
          className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-700">Innehåll</label>
        <textarea
          placeholder="Innehåll"
          rows={10}
          className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-700">Bild</label>

        <input
          type="file"
          accept="image/*"
          id="image-upload"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            onImageChange?.(file);
          }}
        />

        <label
          htmlFor="image-upload"
          className="inline-block cursor-pointer rounded-full bg-white/70 px-4 py-2 text-sm shadow hover:shadow-md transition"
        >
          Välj bild
        </label>
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        Publicerad
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={() => onSubmit({ title, content, published })}
          disabled={!canSubmit}
        >
          {submitLabel}
        </Button>

        {showDelete && (
          <button
            type="button"
            className="text-sm text-red-600 underline hover:opacity-70"
            onClick={onDelete}
          >
            Ta bort inlägg
          </button>
        )}

        {!canSubmit && (
          <span className="text-xs text-gray-500">
            Fyll i titel och innehåll för att spara.
          </span>
        )}
      </div>
    </div>
  );
}
