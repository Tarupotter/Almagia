
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
        <div className="rounded-3xl bg-white/60 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Publicerade inlägg</p>
          <p className="mt-2 text-3xl">3</p>
        </div>

        <div className="rounded-3xl bg-white/60 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Recensioner</p>
          <p className="mt-2 text-3xl">12</p>
        </div>

        <div className="rounded-3xl bg-white/60 p-6 shadow-sm">
          <p className="text-sm text-gray-600">Senaste uppdatering</p>
          <p className="mt-2 text-base">Idag</p>
        </div>
      </div>
    </div>
  );
}
