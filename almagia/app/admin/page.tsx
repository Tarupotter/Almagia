const stats = {
  posts: 3,
  reviews: 12,
  lastUpdate: "Idag",
};

export default function AdminPage() {
  return (
    <div className="space-y-10">
    <div className="space-y-2">
      <h1 className="text-2xl">Startsida</h1>
      <p className="text-sm text-gray-700">
        Här kan du uppdatera blogginlägg, recensioner och “Om mig”-sidan.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <StatCard label="Publicerade inlägg" value={stats.posts} />
      <StatCard label="Recensioner" value={stats.reviews} />
      <StatCard label="Senaste uppdatering" value={stats.lastUpdate} />
    </div>
  </div>
);
}

function StatCard({ label, value }: { label: string; value: number | string }) {
return (
  <div className="rounded-3xl bg-white/60 p-6 shadow-sm">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="mt-2 text-3xl">{value}</p>
  </div>
);
}
