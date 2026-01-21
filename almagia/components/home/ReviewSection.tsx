"use client";

import { useState, useMemo } from "react";
import ReviewCard from "@/components/home/ReviewCard";
import Button from "../ui/Button";

type Review = {
  id: string;
  name: string;
  message: string;
  status: "pending" | "approved";
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const approvedReviews = useMemo(
    () => reviews.filter((r) => r.status === "approved"),
    [reviews]
  );

  const handleSubmit = () => {
    if (!message.trim()) return;

    setReviews((prev) => [
      {
        id: crypto.randomUUID(),
        name: name.trim() || "Anonym",
        message: message.trim(),
        status: "pending",
      },
      ...prev,
    ]);

    setName("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <section className="bg-white/10 mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl">Dela din upplevelse</h2>
        <p className="">
          Dela gärna vad du tyckte om ditt besök, skriv bara det som känns rätt
          för dig ♡
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl bg-white/60 p-8 shadow-sm">
          <h3 className="mb-4 text-xl">Skriv några rader</h3>

          <div className="space-y-4">
            <textarea
              placeholder="Hur upplevde du din tid här?"
              className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSubmitted(false);
              }}
            />

            <input
              type="text"
              placeholder="Ditt namn (valfritt)"
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button onClick={handleSubmit}>Skicka</Button>
            {submitted && (
              <p className="text-xs text-gray-600">
                Tack! Din recension visas efter att den har godkänts.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {approvedReviews.length === 0 ? (
            <>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </>
          ) : (
            approvedReviews.map((r) => (
              <ReviewCard key={r.id} name={r.name} message={r.message} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
