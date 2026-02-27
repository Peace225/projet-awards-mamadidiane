import React from "react";
// Assure-toi que tous ces fichiers ont l'extension .jsx dans leur dossier respectif
import Hero from "../components/sections/Hero";
import Evenement from "../components/sections/Evenement";
import Objectifs from "../components/sections/Objectif";
import Newsletter from "../components/sections/Newsletter";
import Partenaires from "../components/sections/Partenaires";

/**
 * Page d'accueil des Awards Mamadi Diané
 * Si une erreur 404 persiste, vérifie que :
 * 1. Le fichier Newsletter.jsx existe bien (et non Newsletter.js)
 * 2. Le fichier Objectif.jsx n'est pas nommé Objectifs.jsx (attention au 's')
 */
export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Evenement />
      <Objectifs />
      <Newsletter />
      <Partenaires />
    </main>
  );
}