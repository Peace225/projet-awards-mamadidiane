import React from "react";
import HeaderSection from "../components/HeaderSection";
import ValeursSection from "../components/ValeursSection";
import MissionsSection from "../components/MissionsSection";
// 👇 1. On importe le nouveau composant 👇
import MamadiDianeParcours from "../components/MamadiDianeParcours"; 

export default function Apropos() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* Section Qui sommes-nous */}
      <section id="qui-sommes-nous">
        <HeaderSection />
      </section>

      {/* Section Nos valeurs */}
      <section id="nos-valeurs">
        <ValeursSection />
      </section>

      {/* Section Nos missions */}
      <section id="nos-missions">
        <MissionsSection />
      </section>

      {/* 👇 2. On affiche la nouvelle section 👇 */}
      {/* (L'ID "parcours-engagement" est déjà directement intégré à l'intérieur du composant) */}
      <MamadiDianeParcours />

    </div>
  );
}