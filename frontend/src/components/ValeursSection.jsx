import { motion } from "framer-motion";
import { Award, Lightbulb, ShieldCheck } from "lucide-react";

export default function ValeursSection() {
  
  // Ajout des icônes et enrichissement subtil des textes pour un ton plus "Prestige"
  const valeurs = [
    { 
      title: "Excellence", 
      desc: "L’excellence constitue le fondement des Awards Mamadi Diane.Elle se traduit par la reconnaissance de parcours d’exception, d’engagements remarquables et d’actions à fort impact. Nous valorisons la rigueur, la performance durable et la capacité à inspirer au plus haut niveau.",
      icon: Award
    },
    { 
      title: "Innovation", 
      desc: "L’innovation incarne la vision d’avenir que nous défendons.Nous célébrons les initiatives audacieuses, les idées transformatrices et les solutions créatives qui participent activement au développement institutionnel, économique et social du continent.",
      icon: Lightbulb
    },
    { 
      title: "Intégrité", 
      desc:"L’intégrité guide chacune de nos actions.Transparence, éthique, loyauté institutionnelle et respect des valeurs républicaines constituent les piliers de notre démarche. Nous croyons qu’un leadership durable repose avant tout sur la probité et le sens de la responsabilité.",
      icon: ShieldCheck
    },
  ];

  return (
    <section className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs d'ambiance */}
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
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
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Valeurs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Les principes fondamentaux qui guident notre vision et garantissent le prestige et l'impartialité des Awards Mamadi Diané.
          </p>
        </motion.div>

        {/* --- GRILLE DES VALEURS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {valeurs.map((valeur, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }} // Apparition en cascade
              className="group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 lg:p-12 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden text-center shadow-xl"
            >
              {/* Lueur interne au survol */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Ligne animée supérieure */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Icône */}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:border-transparent transition-all duration-500 shadow-lg">
                <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <valeur.icon size={32} className="text-yellow-500 group-hover:text-black transition-colors relative z-10" strokeWidth={1.5} />
              </div>

              {/* Textes */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {valeur.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {valeur.desc}
                </p>
              </div>

              {/* Filigrane (Watermark) */}
              <valeur.icon 
                className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:text-yellow-500/5 transition-all duration-700 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none z-0" 
                strokeWidth={0.5} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}