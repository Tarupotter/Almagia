import Button from "./Button";

export default function TreatmentsSection() {
  return (
    <section className="py-24">
      <div className="px-6">
        <h2 className="mb-16 text-3xl text-center">Behandlingar</h2>

        <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-b from-[#F5EBDD]/80 to-white/60 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h3 className="mb-4 text-2xl">Ljusflöde ansiktsmassage</h3>

            <p className="mb-6">
              En mjuk och avslappnande behandling som kombinerar energiarbete
              med ansiktsmassage. Syftar till att skapa balans, öka
              cirkulationen och ge djup återhämtning.
            </p>

            <Button href="#">Boka behandling</Button>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-[#F5EBDD]/80 to-white/60 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">

            <h3 className="mb-4 text-2xl">Healing</h3>

            <p className="mb-6">
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
