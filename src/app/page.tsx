import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BentoStats from "@/components/BentoStats";
import TierComparison from "@/components/TierComparison";
import ReadinessCheck from "@/components/ReadinessCheck";
import Fundamentals from "@/components/Fundamentals";
import ListingSupport from "@/components/ListingSupport";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BentoStats />
        <TierComparison />
        <ReadinessCheck />
        <Fundamentals />
        <ListingSupport />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
