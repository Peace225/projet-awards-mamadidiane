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
  {
    id: 4,
    title: "Dévoilement du jury d'exception",
    date: "2 Mai 2026",
    image: "/images/actualites/lancement.jpg",
    description: "Découvrez les personnalités influentes et les experts de renommée internationale qui composent le jury de cette édition.",
    link: "/actualites/jury-2026",
  },
  {
    id: 5,
    title: "Le lieu de la cérémonie enfin révélé",
    date: "10 Mai 2026",
    image: "/images/actualites/candidatures.jpg",
    description: "C'est dans un cadre de prestige, au cœur de la capitale, que se tiendra la grande soirée de gala des Awards.",
    link: "/actualites/lieu-ceremonie",
  },
  {
    id: 6,
    title: "Rencontre avec les lauréats de la précédente édition",
    date: "12 Mai 2026",
    image: "/images/actualites/partenaires.jpg",
    description: "Retour sur les parcours inspirants de ceux qui ont marqué l'histoire des Awards et continuent d'impacter le continent.",
    link: "/actualites/anciens-laureats",
  },
];

export default function Actualites() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <section className="relative bg-zinc-950 min-h-screen py-24 px-4 md:px-6 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- EN-TÊTE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Actualités & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Médias</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Retrouvez toutes les annonces officielles, les temps forts et les préparatifs du gala le plus attendu de l'année.
          </p>
        </motion.div>

        {/* --- GRILLE DES ARTICLES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-yellow-500/40 transition-all duration-500 shadow-xl cursor-pointer"
              onClick={() => window.location.href = article.link} // Rend toute la carte cliquable
            >
              {/* Image avec effet Cinématographique */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                {/* Dégradé bas d'image pour fondre avec la carte */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
              </div>

              {/* Contenu de l'article */}
              <div className="p-8 flex flex-col flex-1 relative z-20 -mt-6">
                
                {/* Badge Date */}
                <div className="flex items-center gap-2 text-yellow-500 mb-4">
                  <Calendar size={16} strokeWidth={2} />
                  <span className="text-xs font-black uppercase tracking-widest">{article.date}</span>
                </div>

                {/* Titre */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                  {article.description}
                </p>

                {/* Bouton / Lien */}
                <div className="mt-auto flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                  <span>Lire l'article</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}