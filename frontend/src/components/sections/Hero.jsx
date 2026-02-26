import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTrophy, FaCertificate } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/images/baniere/bar.jpg", // Assurez-vous que le chemin est correct
      h1: "Bienvenue sur la page officielle des Awards Mamadi Diane",
      subH1: "L'Excellence en Héritage",
      p: "Une distinction d’excellence dédiée à la reconnaissance des leaders et des institutions stratégiques.",
      categories: [
        { title: "Candidater", icon: <FaTrophy />, color: "text-yellow-400", border: "border-yellow-500", path: "/candidater" },
        { title: "Accréditation", icon: <FaCertificate />, color: "text-white", border: "border-white/40", path: "/accreditation" },
      ],
    },
  ];

  const slide = slides[current];

  // --- GÉNÉRATION DU FOND ÉTOILÉ (useMemo pour la performance) ---
  const stars = useMemo(() => {
    const starCount = 80; // Nombre d'étoiles
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100, // Position verticale aléatoire (%)
      left: Math.random() * 100, // Position horizontale aléatoire (%)
      size: Math.random() * 2 + 0.5, // Taille aléatoire (0.5px à 2.5px)
      // Délai et durée de scintillement aléatoires
      blinkDelay: Math.random() * 3,
      blinkDuration: Math.random() * 2 + 1,
      // Couleur : majoritairement blanc, quelques-unes dorées
      color: Math.random() > 0.8 ? "#FFE082" : "#FFFFFF", 
    }));
  }, []);

  // --- GÉNÉRATION DES CONFETTIS DE FÊTE ---
  const confettis = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 2,
      color: ["#F59E0B", "#FFD700", "#FFFFFF"][Math.floor(Math.random() * 3)],
    })), []);

  return (
    <section className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden bg-black flex items-center">
      
     {/* 1. IMAGE DE FOND (Optimisée Mobile & Desktop) */}
<AnimatePresence mode="wait">
  <motion.img
    key={current}
    src={slide.image}
    alt={slide.h1}
    /* Explications des classes :
       - object-cover : remplit toute la zone
       - object-center : centre l'image sur mobile (évite de couper les côtés)
       - md:object-top : sur tablette/PC, on cale en haut pour ne pas couper la tête
       - brightness-[0.5] : légèrement plus clair sur mobile pour une meilleure visibilité
    */
    className="absolute inset-0 w-full h-full object-cover object-center md:object-top brightness-[0.5] md:brightness-[0.4] z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />
</AnimatePresence>

      {/* 2. CALQUE ÉTOILÉ SCINTILLANT (Nouveau) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              boxShadow: star.size > 1.5 ? `0 0 ${star.size * 2}px ${star.color}` : "none", // Effet de halo pour les plus grosses
            }}
            // Animation de scintillement (blinking)
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: star.blinkDuration,
              delay: star.blinkDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3. EFFETS DE FÊTE & OVERLAY (Confettis) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        {confettis.map((c) => (
          <motion.div
            key={c.id}
            className="absolute rounded-full"
            style={{ left: `${c.left}%`, backgroundColor: c.color, width: c.size, height: c.size }}
            animate={{ y: ["0vh", "100vh"], opacity: [0, 1, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: c.delay, ease: "linear" }}
          />
        ))}
      </div>

      {/* 4. LE CONTENU : Aligné à DROITE */}
      <div className="relative z-10 w-full flex justify-center md:justify-end px-6 md:pr-24 lg:pr-40">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl text-center md:text-right flex flex-col items-center md:items-end"
        >
          {/* SubH1 */}
          <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">
            {slide.subH1}
          </span>

          {/* H1 : Texte plein (non coupé) mais décalé */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight drop-shadow-2xl">
            {slide.h1}
          </h1>

          {/* Paragraphe */}
          <p className="text-gray-200 mt-6 max-w-xl text-sm md:text-lg font-light opacity-90">
            {slide.p}
          </p>

          {/* Boutons alignés */}
          <div className="flex flex-row flex-wrap justify-center md:justify-end gap-4 mt-10">
            {slide.categories.map((cat, index) => (
              <motion.button
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#EAB308", 
                  color: "#000",
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(cat.path)}
                className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border ${cat.border} bg-black/40 backdrop-blur-md transition-all group`}
              >
                <span className={`text-xl ${cat.color} group-hover:text-black transition-colors`}>
                  {cat.icon}
                </span>
                <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-white group-hover:text-black transition-colors">
                  {cat.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}