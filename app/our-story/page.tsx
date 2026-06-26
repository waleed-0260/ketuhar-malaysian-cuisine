import type { Metadata } from "next";
import Image from "next/image";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SimpleDivider } from "@/components/shared/SimpleDivider";
import { PhilosophyBlock } from "@/components/shared/PhilosophyBlock";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Ketuhar — the Enak KL heritage, the meaning of the oven, and the philosophy of cooking as care.",
};

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={PLACEHOLDER}
          alt="Ketuhar kitchen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ketuhar-charcoal/80 via-ketuhar-charcoal/30 to-ketuhar-charcoal/10" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-white/50 font-body mb-3">
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight max-w-xl">
              The oven, and what it holds
            </h1>
          </div>
        </div>
      </div>

      {/* Opening section */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <FadeReveal>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ketuhar-clay font-body mb-6">
              The Name
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-ketuhar-charcoal leading-snug mb-8">
              Ketuhar is the Malay word for oven.
            </h2>
            <div className="space-y-5 text-[0.95rem] text-muted-foreground font-body leading-relaxed">
              <p>
                It is where heat transforms raw ingredients into something
                nourishing. It is the source of warmth in the kitchen, and
                through the kitchen, in the home. In Malaysian culture — as in
                so many — the hearth is the heart. The place where the family
                gathers. The place where care is made visible through food.
              </p>
              <p>
                We chose the name because we believe in that unspoken contract
                between cook and guest. You come to the table, and we offer you
                something made with genuine attention. Not spectacle, not
                performance — care.
              </p>
            </div>
          </FadeReveal>

          <SimpleDivider variant="gold" className="my-12 max-w-[4rem]" />

          <FadeReveal delay={0.1}>
            <blockquote className="font-display text-2xl md:text-3xl font-light text-ketuhar-charcoal italic leading-relaxed">
              "The oven is the heart of the home — and the heart of Ketuhar is
              the conviction that food, made well, is an act of love."
            </blockquote>
          </FadeReveal>
        </div>
      </div>

      {/* Enak KL heritage */}
      <PhilosophyBlock
        label="Heritage"
        heading="The Enak KL lineage"
        body={
          <>
            <p>
              Ketuhar was created by the team behind Enak KL, one of Kuala
              Lumpur's most celebrated Malaysian fine-dining establishments. For
              years, Enak KL refined what it means to present Malaysian heritage
              cuisine in a setting of genuine distinction — without losing the
              soul that makes Malaysian food so deeply loved.
            </p>
            <p>
              That pedigree of excellence follows us here. Every dish at
              Ketuhar inherits that standard of craft, that respect for
              authentic flavour, and that commitment to doing the simple things
              uncommonly well.
            </p>
          </>
        }
        imageSrc={PLACEHOLDER}
        imageAlt="Enak KL heritage and culinary lineage"
        imagePosition="right"
        textBg="cream"
      />

      {/* Wellness philosophy */}
      <PhilosophyBlock
        label="Philosophy"
        heading="Cooking as an act of care"
        body={
          <>
            <p>
              At ZÉLL-V Wellness Hub, the overriding philosophy is "Inspiring
              Better Health." Ketuhar is the culinary expression of that idea.
              Our kitchen approaches every plate not as an opportunity for
              indulgence alone, but as a chance to nourish — body and spirit.
            </p>
            <p>
              We build our dishes from the inside out: starting with the herbs,
              the roots, the spices that have sustained Malaysian communities
              for generations. These are not garnishes. They are the foundation.
            </p>
            <p>
              The result is food that tastes genuinely Malaysian — vivid,
              aromatic, deeply satisfying — and that also leaves you feeling
              considered, rather than heavy.
            </p>
          </>
        }
        imageSrc={PLACEHOLDER}
        imageAlt="Ketuhar kitchen philosophy"
        imagePosition="left"
        textBg="white"
      />

      {/* Ingredient sourcing */}
      <div className="bg-ketuhar-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <FadeReveal>
              <SectionHeading
                label="Ingredients"
                heading="Locally rooted, seasonally led"
                subheading="Every herb and leaf is chosen from trusted local farms and foragers. We work closely with our suppliers to ensure that the ingredients on our menu are as close to the source as possible — and as fresh as the season allows."
                align="left"
                light
              />
            </FadeReveal>

            <FadeReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    title: "Ulam Greens",
                    body: "Wild and cultivated herbs used in salads, broths and marinades.",
                  },
                  {
                    title: "Rempah Spices",
                    body: "Fresh-ground spice pastes made daily from whole roots, seeds and bark.",
                  },
                  {
                    title: "Coconut Products",
                    body: "Fresh coconut milk, kerisik and grated coconut from selected local producers.",
                  },
                  {
                    title: "Kampung Proteins",
                    body: "Heritage and free-range proteins sourced from responsible local farms.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display text-lg font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 font-body leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-ketuhar-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeReveal>
            <SectionHeading
              label="Where to Find Us"
              heading="ZÉLL-V Wellness Hub"
              subheading="Ketuhar is located within ZÉLL-V Wellness Hub at Menara Ruyi, off Jalan Syed Putra — a short distance from Mid Valley Megamall and KL Sentral. We are open daily from 12:00 to 22:00, and we welcome both walk-ins and reservations."
            />
          </FadeReveal>
        </div>
      </div>
    </div>
  );
}
