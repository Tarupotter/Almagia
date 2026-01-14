"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type Review = {
  id: string;
  name: string;
  message: string;
  status: "pending" | "approved";
};

export default function AdminReviewsPage() {
  // Tom lista som ska fyllas från backend senare
  const [reviews, setReviews] = useState<Review[]>([]);

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
    console.log("Remove review", id);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl">Recensioner</h1>
        <p className="text-sm text-gray-600">
          Här kan du godkänna, avpublicera eller ta bort recensioner.
        </p>
      </div>

      {reviews.length === 0 ? (
        <p className="text-sm text-gray-600">
          Inga recensioner att visa ännu.
        </p>
      ) : (
        <ul className="space-y-3">
          {reviews.map((r) => (
            <li
              key={r.id}
              className="rounded-2xl bg-white/60 p-5 space-y-3"
            >
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
