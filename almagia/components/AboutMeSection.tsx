type AboutMeProps = {
    name?: string;
    bio?: string;
    imageUrl?: string;
  };
  
  export default function AboutMeSection({
    name = "Sara Dahlbäck",
    bio = "Här kommer du att kunna skriva vad du vill om dig själv, och ändra när du vill!",
    imageUrl = "/saraatbeach.jpeg"
  }: AboutMeProps) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <img
          src={imageUrl}
          alt={name}
          className="mx-auto mb-6 w-100 h-100 rounded-full object-cover shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
        <p className="text-lg md:text-xl">{bio}</p>
      </section>
    );
  }
  