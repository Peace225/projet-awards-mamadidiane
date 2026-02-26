import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";
import Evenement from "../components/sections/Evenement"
import Objectifs from "../components/sections/Objectif";
import Intervenants from "../components/sections/IntervenantsCarousel";
import Partenaires from "../components/sections/Partenaires";

export default function Home() {
  return (
    <>
      <Hero />
      <Evenement />
      <Objectifs />
      <Intervenants />
      <Partenaires />
      
    </>
  )
}
