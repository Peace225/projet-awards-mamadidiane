import { motion } from "framer-motion";
import { ShieldCheck, Users, Radio, Globe, ArrowRight, Sparkles } from "lucide-react";
import PartenaireImage from "../components/assets/logo.png"; // Garde bien ton import

export default function DevenirPartenaire() {
  
  // Tableau des avantages pour un rendu propre et itératif
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Prestige & Crédibilité",
      desc: "Associez votre marque à une figure emblématique de l’excellence. Votre entreprise s’inscrit dans une dynamique de responsabilité et de leadership.",
    },
    {
      icon: Users,
      title: "Networking de Haut Niveau",
      desc: "Intégrez un cercle privilégié de décideurs publics et privés, ministres, ambassadeurs et dirigeants influents du développement économique.",
    },
    {
      icon: Radio,
      title: "Visibilité Multicanale",
      desc: "Bénéficiez d’une couverture médiatique massive (TV, Presse, Digital) avant, pendant et après la cérémonie.",
    },
    {
      icon: Globe,
      title: "Engagement & Impact",
      desc: "Affirmez votre responsabilité sociétale (RSE) en soutenant une initiative qui valorise l’excellence et la transmission.",
    },
  ];

  return (
    <section className="relative bg-zinc-950 text-white min-h-screen py-24 px-6 overflow-hidden flex items-center">

      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [-50, 0, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2], x: [50, 0, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">

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
            Devenir <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Partenaire</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            En associant votre image aux Awards Mamadi Diané, vous bénéficiez d’un positionnement institutionnel fort et d’un rayonnement stratégique à haute valeur ajoutée.
          </p>
        </motion.div>

        {/* --- LAYOUT DEUX COLONNES --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* COLONNE GAUCHE : Arguments (Liste) */}
          <div className="w-full lg:w-1/2 space-y-4">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex items-start gap-5 p-6 rounded-[2rem] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
              >
                {/* Icône Squircle */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-transparent transition-all duration-300 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  <item.icon size={26} className="text-yellow-500 group-hover:text-black transition-colors relative z-10" strokeWidth={1.5} />
                </div>
                
                {/* Texte */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Bouton d'action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8 pl-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 group"
              >
                <Sparkles size={18} />
                <span>DOSSIER DE PARTENARIAT</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* COLONNE DROITE : Image Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Cadre en verre autour de l'image (Glass frame) */}
            <div className="relative rounded-[3rem] p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group overflow-hidden">
              
              {/* Lueur d'ambiance qui passe derrière l'image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />

              {/* Conteneur de l'image avec un ratio propre */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-zinc-900">
                <img
                  src={PartenaireImage}
                  alt="Partenariat Awards Mamadi Diane"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                {/* Dégradé de superposition sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge/Texte flottant sur l'image */}
                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-black/40 backdrop-blur-md p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-1">Édition 2027</p>
                  <p className="text-white text-sm">Rejoignez le cercle restreint de nos partenaires officiels.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}