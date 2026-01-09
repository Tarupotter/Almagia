import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 space-y-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Kontakt
      </h2>

    
      <div className="rounded-3xl bg-white/70 p-10 shadow-sm space-y-6">
        <h3 className="text-2xl font-semibold">Kontaktinformation</h3>
        <p>Telefon: 070-123 45 67</p>
        <p> E-post: info@healing.se</p>

      
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          Karta kommer här
        </div>
      </div>

    
      <div className="rounded-3xl bg-white/70 p-10 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">Skicka meddelande</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ditt namn"
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Din e-post"
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <textarea
            placeholder="Ditt meddelande"
            rows={5}
            className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Button>Skicka</Button>
        </div>
      </div>
    </section>
  );
}
