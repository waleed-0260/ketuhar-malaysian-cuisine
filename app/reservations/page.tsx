import type { Metadata } from "next";
import { ReservationForm } from "@/components/shared/ReservationForm";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SimpleDivider } from "@/components/shared/SimpleDivider";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Ketuhar Malaysian Cuisine. Indoor and rooftop seating available. Dietary and wellness requests welcome.",
};

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-ketuhar-cream pt-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <FadeReveal>
          <SectionHeading
            label="Reservations"
            heading="Reserve your table"
            subheading="We welcome both walk-ins and reservations. For the best experience, we recommend booking in advance, particularly for rooftop seating and larger parties."
          />
        </FadeReveal>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <FadeReveal>
              <div className="bg-white rounded-sm p-8 space-y-7">
                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-3">
                    Location
                  </p>
                  <address className="not-italic text-sm text-ketuhar-charcoal font-body leading-relaxed">
                    Menara Ruyi, off Jalan Syed Putra
                    <br />
                    Kuala Lumpur
                    <br />
                    <span className="text-muted-foreground text-xs">
                      Inside ZÉLL-V Wellness Hub
                    </span>
                  </address>
                </div>

                <SimpleDivider />

                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-3">
                    Hours
                  </p>
                  <p className="text-sm text-ketuhar-charcoal font-body">Daily</p>
                  <p className="text-sm text-ketuhar-charcoal font-body">
                    12:00 – 22:00
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-1">
                    Last seating at 21:30
                  </p>
                </div>

                <SimpleDivider />

                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-3">
                    For Enquiries
                  </p>
                  <a
                    href="tel:+60321234567"
                    className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors block"
                  >
                    +60 3-2123 4567
                  </a>
                  <a
                    href="mailto:hello@ketuhar.com.my"
                    className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors block mt-1"
                  >
                    hello@ketuhar.com.my
                  </a>
                </div>

                <SimpleDivider />

                <div>
                  <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-3">
                    Seating
                  </p>
                  <div className="space-y-1.5 text-sm text-muted-foreground font-body">
                    <p>Indoor dining room</p>
                    <p>Rooftop terrace</p>
                    <p className="text-xs mt-2">
                      Rooftop seating subject to weather. We will advise at
                      time of confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </FadeReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <FadeReveal delay={0.1}>
              <div className="bg-white rounded-sm p-8 md:p-10">
                <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-6">
                  Reservation Request
                </p>
                <ReservationForm />
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
