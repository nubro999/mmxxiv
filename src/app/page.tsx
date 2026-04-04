import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import KeyFocus from "@/components/KeyFocus";
import BentoStats from "@/components/BentoStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <KeyFocus />
        <BentoStats />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
