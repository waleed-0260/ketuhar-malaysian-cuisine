"use client";

import { PhilosophyBlock } from "@/components/shared/PhilosophyBlock";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeReveal } from "@/components/shared/FadeReveal";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

export function PhilosophySection() {
  return (
    <section>
      {/* Introductory text block */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeReveal>
            <SectionHeading
              label="Our Philosophy"
              heading="The oven at the heart"
              subheading="Ketuhar — the Malay word for oven — speaks to something primal and intimate: the hearth around which family gathers, the source of warmth, nourishment, and belonging. We carry that spirit into every detail of how we cook and how we welcome."
            />
          </FadeReveal>
        </div>
      </div>

      {/* Heritage block */}
      <PhilosophyBlock
        label="Heritage"
        heading="Born from a lineage of excellence"
        body={
          <>
            <p>
              Ketuhar is crafted by the team behind Enak KL — one of Kuala
              Lumpur's most celebrated Malaysian dining establishments. We carry
              forward that commitment to culinary mastery, applying the same
              exacting standards to every dish that leaves our kitchen.
            </p>
            <p>
              The Enak KL pedigree is not simply a badge. It represents years
              of refining how Malaysian heritage cuisine can be expressed in a
              considered, fine-dining context — without losing the soul of the
              original.
            </p>
          </>
        }
        imageSrc={PLACEHOLDER}
        imageAlt="Ketuhar culinary heritage"
        imagePosition="right"
        textBg="white"
      />

      {/* Wellness block */}
      <PhilosophyBlock
        label="Wellness"
        heading="Where fine dining meets wellbeing"
        body={
          <>
            <p>
              Situated within ZÉLL-V Wellness Hub, Ketuhar was conceived as
              the natural dining companion to a life lived well. Our kitchen
              aligns with ZÉLL-V's "Inspiring Better Health" philosophy — every
              plate is designed to nourish as much as to delight.
            </p>
            <p>
              This is not health food in the reductive sense. It is cuisine
              that respects the body as deeply as it respects the palate — food
              that leaves you feeling considered, not indulged.
            </p>
          </>
        }
        imageSrc={PLACEHOLDER}
        imageAlt="ZÉLL-V Wellness Hub dining setting"
        imagePosition="left"
        textBg="cream"
      />
    </section>
  );
}
