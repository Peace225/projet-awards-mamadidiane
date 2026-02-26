import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Apropos from "../pages/Apropos";
import QuiSommesNous from "../components/HeaderSection";
import NosValeurs from "../components/ValeursSection";
import NosMissions from "../components/MissionsSection";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Candidater from "../pages/Candidater";
import Accreditation from "../pages/Accreditation";
import Badge from "../pages/Badge";
import Categories from "../pages/Categories";
import DevenirPartenaire from "../pages/DevenirPartenaire";
import DevenirSponsor from "../pages/DevenirSponsor";
import Actualites from "../pages/Actualites";

// Import des nouvelles pages médias
import Photos from "../components/Photos";
import Videos from "../components/Videos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* À PROPOS */}
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/nos-valeurs" element={<NosValeurs />} />
      <Route path="/nos-missions" element={<NosMissions />} />

      {/* MÉDIAS */}
      <Route path="/photos" element={<Photos />} />
      <Route path="/videos" element={<Videos />} />

      {/* Autres pages */}
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/candidater" element={<Candidater />} />
      <Route path="/accreditation" element={<Accreditation />} />
      <Route path="/badge" element={<Badge />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
      <Route path="/devenir-sponsor" element={<DevenirSponsor />} />
      <Route path="/actualites" element={<Actualites />} />

      {/* Page 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}