import Button from "./Button";

export default function TreatmentsSection() {
  return (
    <section className="bg-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl md:text-4xl">Behandlingar</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl bg-white/70 p-10 shadow-sm">
            <h3 className="mb-4 text-2xl">Ljusflöde ansiktsmassage</h3>

            <p className="mb-6 text-gray-700 leading-relaxed">
              En mjuk och avslappnande behandling som kombinerar energiarbete
              med ansiktsmassage. Syftar till att skapa balans, öka
              cirkulationen och ge djup återhämtning.
            </p>

            <Button href="#">Boka behandling</Button>
          </div>

          <div className="rounded-3xl bg-white/70 p-10 shadow-sm">
            <h3 className="mb-4 text-2xl">Healing</h3>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Healing arbetar med kroppens energisystem för att frigöra
              blockeringar och skapa inre harmoni. Behandlingen anpassas efter
              dina behov.
            </p>

            <Button href="#">Boka behandling</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
