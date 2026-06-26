"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  seating: "indoor" | "rooftop" | "";
  requests: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

const inputClass =
  "w-full bg-white border border-ketuhar-charcoal/15 rounded-sm px-4 py-3 text-sm text-ketuhar-charcoal placeholder:text-muted-foreground font-body focus:outline-none focus:border-ketuhar-clay transition-colors duration-200";

const labelClass =
  "block text-[0.65rem] tracking-[0.18em] uppercase text-ketuhar-charcoal/60 font-body mb-1.5";

export function ReservationForm({ className }: { className?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
    seating: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col items-center text-center py-16 px-8 gap-5"
          >
            <div className="w-12 h-px bg-ketuhar-gold mb-2" />
            <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ketuhar-clay font-body">
              Reservation Received
            </p>
            <h3 className="font-display text-3xl font-light text-ketuhar-charcoal">
              We look forward to welcoming you.
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm font-body leading-relaxed">
              Our team will confirm your reservation within 24 hours. For
              immediate assistance, please call us at{" "}
              <a
                href="tel:+60321234567"
                className="text-ketuhar-clay hover:underline"
              >
                +60 3-2123 4567
              </a>
              .
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs tracking-widest uppercase text-muted-foreground hover:text-ketuhar-charcoal transition-colors font-body underline underline-offset-4"
            >
              Make another reservation
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Full name */}
            <div className="md:col-span-2">
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={set("phone")}
                placeholder="+60 12 345 6789"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {/* Date */}
            <div>
              <label className={labelClass}>Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={set("date")}
                className={inputClass}
              />
            </div>

            {/* Time */}
            <div>
              <label className={labelClass}>Time</label>
              <select
                required
                value={form.time}
                onChange={set("time")}
                className={inputClass}
              >
                <option value="">Select a time</option>
                {[
                  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
                  "21:00", "21:30",
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Party size */}
            <div>
              <label className={labelClass}>Number of Guests</label>
              <select
                required
                value={form.partySize}
                onChange={set("partySize")}
                className={inputClass}
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="9+">9 or more guests</option>
              </select>
            </div>

            {/* Seating preference */}
            <div>
              <label className={labelClass}>Seating Preference</label>
              <select
                value={form.seating}
                onChange={set("seating")}
                className={inputClass}
              >
                <option value="">No preference</option>
                <option value="indoor">Indoor</option>
                <option value="rooftop">Rooftop</option>
              </select>
            </div>

            {/* Special requests */}
            <div className="md:col-span-2">
              <label className={labelClass}>
                Special Requests &amp; Dietary Notes
              </label>
              <textarea
                rows={3}
                value={form.requests}
                onChange={set("requests")}
                placeholder="Dietary requirements, allergies, wellness preferences, occasions..."
                className={cn(inputClass, "resize-none")}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-ketuhar-clay text-white hover:bg-ketuhar-clay/85 font-body tracking-[0.15em] text-xs uppercase px-10 h-12 rounded-sm transition-opacity duration-200 disabled:opacity-60"
              >
                {loading ? "Sending…" : "Request Reservation"}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground font-body">
                We will confirm within 24 hours. For group bookings of 8+,
                please call us directly.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
