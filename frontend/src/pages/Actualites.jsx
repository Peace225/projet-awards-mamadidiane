import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const articlesData = [
  {
    id: 1,
    title: "Lancement officiel des Awards Mamadi Diane",
    date: "10 Février 2026",
    image: "/images/actualites/lancement.jpg",
    description: "La cérémonie de lancement a réuni les leaders, institutions et partenaires pour annoncer le calendrier officiel de l'événement.",
    link: "/actualites/lancement-officiel",
  },
  {
    id: 2,
    title: "Clôture des candidatures pour 2026",
    date: "5 Avril 2026",
    image: "/images/actualites/candidatures.jpg",
    description: "La période de soumission des candidatures s'est terminée, avec un nombre record de participants et initiatives remarquables.",
    link: "/actualites/cloture-candidatures",
  },
  {
    id: 3,
    title: "Nouveaux partenaires et sponsors annoncés",
    date: "20 Avril 2026",
    image: "/images/actualites/partenaires.jpg",
    description: "De nouveaux partenaires et sponsors stratégiques ont rejoint l'événement, renforçant le rayonnement et la visibilité des Awards.",
    link: "/actualites/nouveaux-partenaires",
  },
  // ... (garde tes autres données ici)
];

export default function Actualites() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <section className="relative bg-zinc-950 min-h-screen py-24 px-4 md:px-6 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- EN-TÊTE --- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  // pt-12 (padding-top) ou mt-16 (margin-top) pour descendre le bloc
  className="mt-10 mb-28 text-center" 
>
  <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">
    Actualités{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">
      & Médias
    </span>
  </h1>

  <p className="text-white max-w-xl text-2xl font-light mx-auto"> 
    Restez connectés à l’univers des Awards Mamadi DIANE.
  </p>

  {/* Petit filet doré décoratif */}
  <div className="h-1 w-20 bg-yellow-500 mx-auto mt-6" />
</motion.div>

        {/* --- LISTE DES ARTICLES (SANS CARTES) --- */}
        {/* <div className="flex flex-col">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative py-12 border-b border-white/10 flex flex-col md:flex-row gap-8 items-start cursor-pointer"
              onClick={() => window.location.href = article.link}
            >
              {/* Image Minimaliste */}
              {/* <div className="w-full md:w-72 h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div> */}

              {/* Infos */}
              {/* <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 text-yellow-500/70 mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{article.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-6">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  <span>Découvrir</span>
                  <ArrowRight size={16} className="text-yellow-500" />
                </div>
              </div> */}

              {/* Effet de survol discret en arrière-plan */}
              {/* <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity -mx-4 rounded-xl" />
            </motion.div>
          ))}
        // </div> */} 
        
      </div>
    </section>
  );
}