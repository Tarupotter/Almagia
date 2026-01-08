"use client";

import { useState } from "react";
import ReviewCard from "@/components/ReviewCard";


export default function ReviewsSection() {
  const [reviews, setReviews] = useState<{ name: string; message: string }[]>(
    []
  );

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;
    setReviews([{ name: name || "Anonym", message }, ...reviews]);
    setName("");
    setMessage("");
  };

  return (
    <section className="bg-gradient-to-r from-[#E0E4D4] mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-2xl md:text-3xl">
        Dela din upplevelse
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl bg-white/60 p-8 shadow-sm">
          <h3 className="mb-4 text-xl">Skriv några rader</h3>

          <div className="space-y-4">
            <textarea
              placeholder="Hur upplevde du din tid här?"
              className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <input
              type="text"
              placeholder="Ditt namn (valfritt)"
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-full bg-[#687564] px-6 py-2 text-sm text-white hover:opacity-90"
            >
              Skicka
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.length === 0 ? (
            <>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </>
          ) : (
            reviews.map((r, i) => (
              <ReviewCard key={i} name={r.name} message={r.message} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
