import { Hero } from "@/components/sections/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { NourishSection } from "@/components/sections/NourishSection";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { RooftopSection } from "@/components/sections/RooftopSection";
import { VisitStrip } from "@/components/sections/VisitStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <NourishSection />
      <SignatureDishes />
      <RooftopSection />
      <VisitStrip />
    </>
  );
}
