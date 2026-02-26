import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera } from "lucide-react";

// J'ai ajouté quelques photos factices pour bien voir l'effet de grille
const photosData = [
  { id: 1, src: "/media/photo1.jpg", alt: "Arrivée sur le tapis rouge", category: "Tapis Rouge" },
  { id: 2, src: "/media/photo2.jpg", alt: "Remise du Grand Prix", category: "Cérémonie" },
  { id: 3, src: "/media/photo3.jpg", alt: "Discours d'ouverture", category: "Interventions" },
  { id: 4, src: "/media/photo4.jpg", alt: "Cocktail VIP", category: "Networking" },
  { id: 5, src: "/media/photo5.jpg", alt: "Photo de groupe des lauréats", category: "Lauréats" },
  { id: 6, src: "/media/photo6.jpg", alt: "Ambiance de la salle", category: "Gala" },
];

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="relative bg-zinc-950 text-white min-h-screen py-24 px-4 md:px-6 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.2, 1, 1.2], y: [50, 0, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Galerie <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Officielle</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Revivez en images les moments forts, l'élégance et l'émotion de la précédente édition des Awards Mamadi Diané.
          </p>
        </motion.div>

        {/* --- GRILLE DE PHOTOS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photosData.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer shadow-xl hover:shadow-[0_20px_40px_rgba(234,179,8,0.15)] hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              
              {/* Overlay Sombre et Dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Lueur dorée au survol */}
              <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Contenu textuel sur l'image */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Camera size={14} /> {photo.category}
                  </p>
                  <h3 className="text-white font-bold text-lg drop-shadow-md">
                    {photo.alt}
                  </h3>
                </div>
                
                {/* Icône Agrandir */}
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX (MODAL PLEIN ÉCRAN) --- */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)} // Ferme au clic en dehors
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            {/* Bouton de fermeture */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Conteneur de l'image agrandie */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique sur l'image
              className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
            >
              {/* Cadre de l'image */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full max-h-[75vh] object-contain bg-zinc-900"
                />
              </div>

              {/* Légende sous la photo */}
              <div className="mt-6 text-center">
                <p className="text-yellow-500 text-sm font-black uppercase tracking-widest mb-2">
                  {selectedPhoto.category}
                </p>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {selectedPhoto.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}