import ReviewCard from "@/components/ReviewCard";
import ReviewsSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-1">
        <div className="rounded-2xl bg-white/60 p-8 shadow-sm">
          <ReviewsSection />
        </div>
      </div>
    </section>
  );
}
