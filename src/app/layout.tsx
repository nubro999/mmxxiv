import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "MMXXIV | Your Trusted Web3.0 Ecosystem Partner",
  description:
    "Navigate the fragmented Web3 landscape with surgical precision. We engineer strategic gateways between institutional protocols and emerging digital ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-sage text-navy antialiased selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}
