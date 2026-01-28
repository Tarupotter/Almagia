
export default function HeroSection() {
    return (
      <section className="relative w-full h-[500px] md:h-[600px]">
      
        <img
          src="./sunshine.png" 
          alt="Harmonisk bild"
          className="absolute w-full h-full object-cover object-[50%_70%]"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-transparent to-[#F2EADF]" />
      </section>
    );
  }
  