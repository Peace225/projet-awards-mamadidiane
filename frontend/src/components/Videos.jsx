import { motion } from "framer-motion";
import { PlayCircle, Clock, Film } from "lucide-react";

// J'ai enrichi les données pour un rendu plus professionnel (Catégorie, Durée)
const videosData = [
  { 
    id: 1, 
    src: "/media/video1.mp4", 
    title: "Aftermovie Officiel 2026", 
    category: "Rétrospective",
    duration: "03:45",
    desc: "Revivez les moments les plus intenses de la précédente édition des Awards Mamadi Diané."
  },
  { 
    id: 2, 
    src: "/media/video2.mp4", 
    title: "Les Coulisses de la Cérémonie", 
    category: "Making-of",
    duration: "08:20",
    desc: "Plongez dans l'organisation et les préparatifs de cette soirée d'exception."
  },
  // Tu pourras en ajouter d'autres ici
];

export default function Videos() {
  return (
    <section className="relative bg-zinc-950 text-white min-h-screen py-24 px-4 md:px-6 overflow-hidden">
      
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
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.2, 1, 1.2], y: [50, 0, 50] }}
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
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Vidéothèque <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Officielle</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Découvrez les discours inspirants, les remises de prix et l'ambiance unique des Awards à travers nos vidéos exclusives.
          </p>
        </motion.div>

        {/* --- GRILLE DE VIDÉOS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {videosData.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-4 sm:p-6 shadow-2xl hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 flex flex-col"
            >
              {/* Lueur d'ambiance derrière la vidéo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Cadre de la Vidéo (Écran Cinéma) */}
              <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-black border border-white/10 shadow-inner group-hover:border-yellow-500/50 transition-colors duration-500 z-10">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* Informations textuelles */}
              <div className="pt-8 pb-4 px-2 sm:px-4 flex flex-col flex-1 relative z-10">
                
                {/* Métadonnées (Catégorie & Durée) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-yellow-500 text-xs font-black uppercase tracking-widest">
                    <Film size={14} /> {video.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs font-bold tracking-wider">
                    <Clock size={14} /> {video.duration}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {video.desc}
                </p>

                {/* Faux bouton pour l'aspect "Play" (Design only, la vidéo se lance avec ses propres contrôles) */}
                <div className="mt-auto flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  <PlayCircle size={18} className="text-yellow-500" />
                  <span>Regarder la vidéo</span>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}