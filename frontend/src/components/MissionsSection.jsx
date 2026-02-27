import { motion } from "framer-motion";
import { Target, Rocket, Users } from "lucide-react";

export default function MissionsSection() {
  
  // Enrichissement des données avec des titres percutants et des icônes
  const missions = [
    {
      title: "Promotion de l'Excellence",
      desc: "Promouvoir l’excellence et l’innovation dans tous les secteurs stratégiques pour inspirer les générations futures.",
      icon: Target,
    },
    {
      title: "Soutien aux Talents",
      desc: "Encourager, accompagner et mettre en lumière les jeunes talents et entrepreneurs porteurs de solutions d'avenir.",
      icon: Rocket,
    },
    {
      title: "Création de Synergies",
      desc: "Bâtir une communauté influente et engagée autour des valeurs de leadership positif et de l'impact sociétal.",
      icon: Users,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs d'ambiance */}
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
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
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Mission</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
           Notre mission consiste à distinguer les parcours d’exception, à mettre en lumière les initiatives à fort impact et à promouvoir un leadership responsable, porteur de transformation durable.
          </p>
        </motion.div>

        {/* --- LISTE DES MISSIONS (Style Éditorial) --- */}
        <div className="space-y-6 md:space-y-8">
          {missions.map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* Grand numéro en filigrane à l'arrière-plan */}
              <div className="absolute -right-4 -top-8 text-[120px] md:text-[160px] font-black text-white/5 group-hover:text-yellow-500/10 transition-colors duration-700 pointer-events-none z-0 italic leading-none">
                0{idx + 1}
              </div>

              {/* Ligne dorée verticale (Desktop) / Horizontale (Mobile) */}
              <div className="absolute left-0 top-0 w-full h-1 md:w-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-yellow-400 to-yellow-600 transform origin-left md:origin-top scale-x-0 md:scale-x-100 md:scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out z-20" />

              {/* Icône de la mission */}
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-transparent transition-all duration-500 shadow-lg">
                <mission.icon size={32} className="text-yellow-500 group-hover:text-black transition-colors" strokeWidth={1.5} />
              </div>

              {/* Texte de la mission */}
              <div className="relative z-10 flex-1">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {mission.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  {mission.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}