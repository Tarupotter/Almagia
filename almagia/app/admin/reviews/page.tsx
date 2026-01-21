"use client";

import { useState, useMemo } from "react";
import Button from "@/components/ui/Button";

type Review = {
  id: string;
  name: string;
  message: string;
  status: "pending" | "approved";
};

type Filter = "all" | "pending" | "approved";

export default function AdminReviewsPage() {
  // Tom lista som ska fyllas från backend senare
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  function approve(id: string) {
    // koppla till backend
    console.log("Approve review", id);
  }

  function unpublish(id: string) {
    // koppla till backend
    console.log("Unpublish review", id);
  }

  function remove(id: string) {
    // koppla till backend
    const ok = window.confirm("Vill du ta bort recensionen?");
    if (!ok) return;

    console.log("Remove review", id);
  }

  const pendingCount = useMemo(
    () => reviews.filter((r) => r.status === "pending").length,
    [reviews]
  );

  const filteredReviews = useMemo(() => {
    if (filter === "pending")
      return reviews.filter((r) => r.status === "pending");
    if (filter === "approved")
      return reviews.filter((r) => r.status === "approved");
    return reviews;
  }, [reviews, filter]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl">Recensioner</h1>
        <p className="text-sm text-gray-600">
          Här kan du godkänna, avpublicera eller ta bort recensioner.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === "all" ? "bg-[#CFC3B5]" : "bg-white/60 hover:opacity-80"
            }`}
          >
            Alla ({reviews.length})
          </button>

          <button
            type="button"
            onClick={() => setFilter("pending")}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === "pending"
                ? "bg-[#CFC3B5]"
                : "bg-white/60 hover:opacity-80"
            }`}
          >
            Väntar ({pendingCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter("approved")}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === "approved"
                ? "bg-[#CFC3B5]"
                : "bg-white/60 hover:opacity-80"
            }`}
          >
            Publicerade ({reviews.length - pendingCount})
          </button>
        </div>
      </div>
      {filteredReviews.length === 0 ? (
        <div className="rounded-3xl bg-white/60 p-8 text-sm text-gray-600">
          {reviews.length === 0
            ? "Inga recensioner att visa ännu."
            : "Inga recensioner matchar filtret."}
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredReviews.map((r) => (
            <li key={r.id} className="rounded-2xl bg-white/60 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-medium">{r.name || "Anonym"}</p>
                <span className="text-xs text-gray-600">
                  {r.status === "approved" ? "Publicerad" : "Väntar"}
                </span>
              </div>

              <p className="text-sm text-gray-700">{r.message}</p>

              <div className="flex flex-wrap gap-2">
                {r.status === "pending" ? (
                  <Button onClick={() => approve(r.id)}>Godkänn</Button>
                ) : (
                  <button
                    type="button"
                    className="text-sm underline hover:opacity-70"
                    onClick={() => unpublish(r.id)}
                  >
                    Avpublicera
                  </button>
                )}

                <button
                  type="button"
                  className="text-sm text-red-700 underline hover:opacity-70"
                  onClick={() => remove(r.id)}
                >
                  Ta bort
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
