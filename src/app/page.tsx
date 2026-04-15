import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import WhatWeDo from "@/components/WhatWeDo";
import Framework from "@/components/Framework";
import KeyFocus from "@/components/KeyFocus";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import BentoStats from "@/components/BentoStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <WhatWeDo />
        <Framework />
        <KeyFocus />
        <HowWeWork />
        <WhyUs />
        <BentoStats />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
