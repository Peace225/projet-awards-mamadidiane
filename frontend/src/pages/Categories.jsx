import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Landmark, Globe, Handshake, Star, Rocket, Award, X } from "lucide-react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: "Leadership Institutionnel",
      description: "Récompense une personnalité ayant exercé une influence structurante sur les institutions ou la gouvernance publique, avec un sens élevé de l’État.",
      icon: Landmark,
    },
    {
      title: "Diplomatie & Coopération Stratégique",
      description: "Distinction attribuée à une personnalité ayant contribué au rayonnement international et au renforcement des relations bilatérales ou multilatérales.",
      icon: Globe,
    },
    {
      title: "Médiation & Consolidation de la Paix",
      description: "Récompense une personnalité ou organisation ayant œuvré de manière déterminante à la stabilité institutionnelle et au dialogue durable.",
      icon: Handshake,
    },
    {
      title: "Leadership Féminin & Impact Public",
      description: "Distinction honorant une femme dont l’action a contribué au progrès institutionnel, stratégique ou social.",
      icon: Star,
    },
    {
      title: "Innovation & Jeunesse – Vision d’Avenir",
      description: "Récompense un jeune leader ou une initiative innovante porteuse de transformation durable.",
      icon: Rocket,
    },
    {
      title: "Grand Prix d’Honneur Mamadi Diane",
      description: "Distinction suprême attribuée à titre exceptionnel pour une contribution historique et durable, en parfaite adéquation avec les valeurs d’excellence et de service à la Nation.",
      icon: Award,
    },
  ];

  return (
    <section className="bg-zinc-950 text-white min-h-screen py-24 px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Catégories <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Officielles</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Découvrez les distinctions qui honorent l’excellence, l’engagement et le leadership stratégique.
          </p>
        </motion.div>

        {/* --- GRILLE DES CARTES --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCategory(cat)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] cursor-pointer hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg flex flex-col items-center text-center overflow-hidden"
            >
              {/* Lueur interne au survol */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:border-transparent transition-all duration-300 shadow-sm relative z-10">
                <cat.icon size={28} className="text-yellow-500 group-hover:text-black transition-colors" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg font-black uppercase tracking-wider text-gray-100 group-hover:text-yellow-400 transition-colors relative z-10">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL POPUP (Parfaitement Fonctionnel) --- */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick sur le parent (l'écran entier) pour fermer
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-md"
          >
            {/* Le contenu du Modal. 
              Le e.stopPropagation() empêche le clic à l'intérieur de la boîte de fermer le modal.
            */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-lg bg-zinc-900 border border-yellow-500/30 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Bouton Fermer "Croix" en haut à droite */}
              <button 
                onClick={() => setSelectedCategory(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Lueur d'ambiance dans le modal */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none" />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20">
                  <selectedCategory.icon size={36} className="text-black" strokeWidth={1.5} />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">
                  {selectedCategory.title}
                </h2>
                
                <div className="w-10 h-1 bg-yellow-500 rounded-full mb-6" />

                <p className="text-gray-300 leading-relaxed mb-10 font-light">
                  {selectedCategory.description}
                </p>

                {/* Bouton d'action (Optionnel, mais très pro) */}
                <button
                  onClick={() => {
                    // Ici tu pourras mettre un lien vers le formulaire de candidature
                    // alert("Redirection vers le formulaire");
                    setSelectedCategory(null);
                  }}
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-yellow-400 transition-colors duration-300"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}