import TreatmentsSection from "@/components/TreatmentSection";
import ReviewsSection from "@/components/ReviewSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
    
    <section className="mx-auto max-w-6xl px-6 py-10">
       <HeroSection />
      <div className="shadow-sm">
        <TreatmentsSection />
        <ReviewsSection />
      </div>
    </section>
    </>
  );
}
