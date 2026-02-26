import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section className="relative bg-zinc-950 text-white pt-40 pb-24 px-6 overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Texture en pointillés */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteur central doux */}
        <motion.div 
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1], y: [-20, 0, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Ligne dorée de distinction */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight">
            Qui Sommes-<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Nous</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed font-light mx-auto"
        >
          Les <strong className="text-white font-bold tracking-wide">AWARDS MAMADI DIANE </strong> sont dédiés à célébrer l’excellence et l’innovation des leaders et entrepreneurs africains. Nous croyons au potentiel et à l’impact positif de chaque acteur pour bâtir l'avenir du continent.
        </motion.p>

      </div>
    </section>
  );
}