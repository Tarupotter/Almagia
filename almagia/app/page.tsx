import ReviewCard from "@/components/ReviewCard";
import ReviewsSection from "@/components/ReviewSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <HeroSection />

      <div className="shadow-sm">
        <ReviewsSection />
      </div>
    </section>
  );
}
