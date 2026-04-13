import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyFocus from "@/components/KeyFocus";
import Framework from "@/components/Framework";
import HowWeWork from "@/components/HowWeWork";
import BentoStats from "@/components/BentoStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KeyFocus />
        <Framework />
        <HowWeWork />
        <BentoStats />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
