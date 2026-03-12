import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const BrandStatement = dynamic(() => import("@/components/BrandStatement"));
const Founders = dynamic(() => import("@/components/Founders"));
const CinematicCollection = dynamic(() => import("@/components/CinematicCollection"));
const Craftsmanship = dynamic(() => import("@/components/Craftsmanship"));
const ScentExperience = dynamic(() => import("@/components/ScentExperience"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Story = dynamic(() => import("@/components/Story"));
const CandleCare = dynamic(() => import("@/components/CandleCare"));
const Instagram = dynamic(() => import("@/components/Instagram"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-eloisen-cream text-eloisen-green font-sans selection:bg-eloisen-gold selection:text-white">
      <Navbar />
      <Hero />
      <BrandStatement />
      <Founders />
      <CinematicCollection />
      <Craftsmanship />
      <ScentExperience />
      <Gallery />
      <Story />
      <CandleCare />
      <Instagram />
      <Footer />
    </main>
  );
}
