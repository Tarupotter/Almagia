import TreatmentsSection from "@/components/home/TreatmentSection";
import ReviewsSection from "@/components/home/ReviewSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="shadow-sm">
          <TreatmentsSection />
          <ReviewsSection />
        </div>
      </section>
    </>
  );
}
