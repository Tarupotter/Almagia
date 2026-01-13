import Button from "../ui/Button";

export default function TreatmentsSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-20 text-center text-3xl">Behandlingar</h2>

        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] items-start">
          <img
            src="/Meditate.png"
            alt="Healing behandling"
            className="rounded-3xl object-cover "
          />

          <div className="space-y-10">
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-10 shadow-sm">
              <h3 className="mb-4 text-2xl">Healing</h3>
              <p className="mb-6">
                Healing arbetar med kroppens energisystem för att skapa balans,
                lugn och inre harmoni.
              </p>
              <div className="flex justify-end">
                <Button href="#">Boka behandling</Button>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-10 shadow-sm">
              <h3 className="mb-4 text-2xl">Ljusflöde ansiktsmassage</h3>
              <p className="mb-6">
                En mjuk och avslappnande behandling som kombinerar energiarbete
                med ansiktsmassage för djup återhämtning.
              </p>
              <div className="flex justify-end">
                <Button href="#">Boka behandling</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
