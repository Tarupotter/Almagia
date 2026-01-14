"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AdminAboutPage() {
  const [name, setName] = useState("Sara Dahlbäck");
  const [bio, setBio] = useState(
    "Här kan Sara skriva om sig själv, sitt arbete och sin resa."
  );
  const [imageUrl, setImageUrl] = useState("/saraatbeach.jpeg");

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Om mig</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Namn"
          className="w-full rounded-xl border border-gray-300 p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Beskrivning"
          rows={6}
          className="w-full rounded-xl border border-gray-300 p-3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <input
          type="text"
          placeholder="Bild-URL"
          className="w-full rounded-xl border border-gray-300 p-3"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <Button onClick={() => alert("Sparas senare via backend")}>
          Spara ändringar
        </Button>
      </div>
    </div>
  );
}
