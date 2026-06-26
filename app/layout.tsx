import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ketuhar Malaysian Cuisine | Fine Dining at ZÉLL-V Wellness Hub, KL",
    template: "%s | Ketuhar Malaysian Cuisine",
  },
  description:
    "Ketuhar — the Malay word for oven, the heart of the home. Award-winning health-forward Malay, Chinese and Indian fine dining in Kuala Lumpur, crafted by the team behind Enak KL, at ZÉLL-V Wellness Hub.",
  keywords: [
    "Malaysian fine dining",
    "Kuala Lumpur restaurant",
    "Enak KL",
    "wellness dining",
    "ZÉLL-V",
    "Malay cuisine",
    "Chinese cuisine",
    "Indian cuisine",
    "herbal cuisine",
    "Ketuhar",
  ],
  openGraph: {
    title: "Ketuhar Malaysian Cuisine",
    description:
      "Health-forward Malay, Chinese and Indian fine dining at ZÉLL-V Wellness Hub, Kuala Lumpur. By the team behind Enak KL.",
    type: "website",
    locale: "en_MY",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ketuhar-cream text-ketuhar-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
