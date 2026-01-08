
export default function HeroSection() {
    return (
      <section className="relative w-full h-[600px] md:h-[600px]">
        <img
          src="./lokal.jpeg"
          alt="Harmonisk bild"
          className="absolute w-full h-full object-cover object-[70%_30%]"
        />
  
        <div className="absolute inset-20 flex items-center justify-end">
          <div className="bg-white/20 rounded-3xl p-10 max-w-sm text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold">Healing</h2>
            <p className="text-lg md:text-xl">
              Här arbetar vi med energihealing och personlig utveckling för att
              skapa balans och harmoni i ditt liv.
            </p>
          </div>
        </div>
      </section>
    );
  }
  