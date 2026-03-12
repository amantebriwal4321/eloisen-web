import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Founders from "@/components/Founders";
import CinematicCollection from "@/components/CinematicCollection";
import Craftsmanship from "@/components/Craftsmanship";
import ScentExperience from "@/components/ScentExperience";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import CandleCare from "@/components/CandleCare";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

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
