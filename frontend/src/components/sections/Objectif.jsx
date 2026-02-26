import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Trophy, Users, Lightbulb, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Objectifs() {
  const objectifs = [
    {
      title: "Reconnaissance",
      description: "Mettre en lumière les talents exceptionnels et leur impact positif.",
      icon: Trophy,
      count: 120,
    },
    {
      title: "Networking",
      description: "Favoriser les connexions entre leaders, entrepreneurs et innovateurs.",
      icon: Users,
      count: 80,
    },
    {
      title: "Innovation",
      description: "Encourager la créativité et les projets innovants à fort impact.",
      icon: Lightbulb,
      count: 45,
    },
    {
      title: "Rayonnement",
      description: "Promouvoir l’excellence à l’échelle nationale et continentale.",
      icon: Globe,
      count: 15,
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés lents */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Objectifs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Les Awards Mamadi Diané visent à célébrer l’excellence, encourager l’innovation et créer un impact positif durable à travers 4 piliers fondamentaux.
          </p>
        </motion.div>

        {/* --- GRILLE DES OBJECTIFS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {objectifs.map((obj, index) => (
            <AnimatedCard key={index} objectif={obj} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Composant pour la carte animée
function AnimatedCard({ objectif, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Animation ultra-fluide du compteur avec Framer Motion
  const countValue = useMotionValue(0);
  const roundedCount = useTransform(countValue, Math.round);

  useEffect(() => {
    if (inView) {
      animate(countValue, objectif.count, {
        duration: 2.5,
        ease: "easeOut",
      });
    }
  }, [inView, objectif.count, countValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }} // Animation en cascade
      className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-500 group overflow-hidden flex flex-col items-center text-center shadow-2xl"
    >
      {/* Ligne lumineuse au survol */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icône */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full group-hover:bg-yellow-500/40 transition-colors duration-500" />
        <div className="relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500">
          <objectif.icon size={28} className="text-yellow-400 group-hover:text-yellow-300" strokeWidth={1.5} />
        </div>
      </div>

      {/* Compteur Animé - Parfaitement corrigé */}
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <motion.h3 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          {roundedCount}
        </motion.h3>
        <span className="text-3xl font-black text-yellow-500">+</span>
      </div>

      {/* Titre */}
      <h4 className="text-lg font-bold mb-3 uppercase tracking-widest text-white group-hover:text-yellow-400 transition-colors duration-300">
        {objectif.title}
      </h4>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {objectif.description}
      </p>

      {/* Filigrane (Watermark) en arrière-plan */}
      <objectif.icon 
        className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 group-hover:text-yellow-500/10 transition-all duration-700 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none z-0" 
        strokeWidth={0.5} 
      />
    </motion.div>
  );
}