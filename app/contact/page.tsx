"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Globe, Share2 } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SimpleDivider } from "@/components/shared/SimpleDivider";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const inputClass =
  "w-full bg-white border border-ketuhar-charcoal/15 rounded-sm px-4 py-3 text-sm text-ketuhar-charcoal placeholder:text-muted-foreground font-body focus:outline-none focus:border-ketuhar-clay transition-colors duration-200";

const labelClass =
  "block text-[0.62rem] tracking-[0.18em] uppercase text-ketuhar-charcoal/60 font-body mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-ketuhar-cream pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <FadeReveal>
          <SectionHeading
            label="Contact"
            heading="Get in touch"
            subheading="Whether you have a question about the menu, need to arrange a special occasion, or simply want to find us — we are happy to hear from you."
          />
        </FadeReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Info column */}
          <FadeReveal>
            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin
                  className="h-4 w-4 text-ketuhar-clay mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground font-body mb-2">
                    Address
                  </p>
                  <address className="not-italic text-sm text-ketuhar-charcoal font-body leading-relaxed">
                    Menara Ruyi, off Jalan Syed Putra
                    <br />
                    Kuala Lumpur
                  </address>
                  <p className="text-xs text-muted-foreground font-body mt-2 leading-relaxed">
                    Located inside ZÉLL-V Wellness Hub. Enter via the main
                    lobby of Menara Ruyi. Ketuhar is signposted from the
                    ground floor.
                    <br />
                    <span className="mt-1 block">
                      Parking available at Menara Ruyi car park. Accessible
                      from KL Sentral or Mid Valley Megamall by taxi or
                      ride-sharing.
                    </span>
                  </p>
                </div>
              </div>

              <SimpleDivider />

              {/* Hours */}
              <div className="flex gap-4">
                <Clock
                  className="h-4 w-4 text-ketuhar-clay mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground font-body mb-2">
                    Opening Hours
                  </p>
                  <p className="text-sm text-ketuhar-charcoal font-body">
                    Monday – Sunday
                  </p>
                  <p className="text-sm text-ketuhar-charcoal font-body">
                    12:00 – 22:00
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-1">
                    Last seating at 21:30
                  </p>
                </div>
              </div>

              <SimpleDivider />

              {/* Phone & email */}
              <div className="flex gap-4">
                <Phone
                  className="h-4 w-4 text-ketuhar-clay mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground font-body mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+60321234567"
                    className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors"
                  >
                    +60 3-2123 4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="h-4 w-4 text-ketuhar-clay mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground font-body mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@ketuhar.com.my"
                    className="text-sm text-ketuhar-charcoal font-body hover:text-ketuhar-clay transition-colors"
                  >
                    hello@ketuhar.com.my
                  </a>
                </div>
              </div>

              <SimpleDivider />

              {/* Social */}
              <div>
                <p className="text-[0.62rem] tracking-[0.18em] uppercase text-muted-foreground font-body mb-3">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label="Ketuhar on Instagram"
                    className="flex items-center gap-2 text-sm text-ketuhar-charcoal hover:text-ketuhar-clay transition-colors font-body"
                  >
                    <Globe className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href="#"
                    aria-label="Ketuhar on Facebook"
                    className="flex items-center gap-2 text-sm text-ketuhar-charcoal hover:text-ketuhar-clay transition-colors font-body"
                  >
                    <Share2 className="h-4 w-4" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-52 bg-ketuhar-sage/10 border border-ketuhar-charcoal/8 rounded-sm flex flex-col items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-ketuhar-clay/40" strokeWidth={1.5} />
                <p className="text-xs text-muted-foreground font-body">
                  Menara Ruyi, off Jalan Syed Putra, KL
                </p>
                <p className="text-[0.58rem] text-muted-foreground/50 font-body">
                  Replace with Google Maps embed
                </p>
              </div>
            </div>
          </FadeReveal>

          {/* Contact form */}
          <FadeReveal delay={0.1}>
            <div className="bg-white rounded-sm p-8 md:p-10">
              <p className="text-[0.62rem] tracking-[0.2em] uppercase text-ketuhar-clay font-body mb-6">
                Send a Message
              </p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="text-center py-10"
                  >
                    <div className="w-8 h-px bg-ketuhar-gold mx-auto mb-5" />
                    <h3 className="font-display text-2xl font-light text-ketuhar-charcoal mb-3">
                      Message received.
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      We will be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-xs tracking-widest uppercase text-muted-foreground hover:text-ketuhar-charcoal transition-colors font-body underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className={labelClass}>Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="How can we help?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85 font-body tracking-[0.15em] text-[0.7rem] uppercase h-11 rounded-sm disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeReveal>
        </div>
      </div>
    </div>
  );
}
