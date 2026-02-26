import { motion } from "framer-motion";

export default function PartenairesCarousel() {
  const partners = [
    { name: "Orange Côte d'Ivoire", logo: "/images/partenaires/logo1.jpg" },
    { name: "MTN", logo: "/images/partenaires/logo2.jpg" },
    { name: "Moov Africa", logo: "/images/partenaires/logo3.png" },
    { name: "Bolloré", logo: "/images/partenaires/logo4.jpg" },
    { name: "Coca-Cola", logo: "/images/partenaires/logo5.jpg" },
  ];

  // On quadruple le tableau pour s'assurer que le défilement infini n'a jamais de "trou" sur les très grands écrans
  const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative bg-zinc-950 py-24 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white px-6">
        
        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Partenaires</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Merci aux institutions et entreprises d'exception qui accompagnent notre vision et rendent cette célébration de l'excellence possible.
          </p>
        </motion.div>
      </div>

      {/* --- CAROUSEL INFINI (Pleine largeur) --- */}
      <div className="relative w-full pb-10">
        {/* Le masque magique qui efface les bords (Fade Left & Right) */}
        <div className="absolute inset-0 z-20 pointer-events-none [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] bg-zinc-950/0" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-10 w-max"
            // Le secret de l'infini : on décale de 50% de la largeur totale, puis on recommence instantanément
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {repeatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-none w-[180px] h-[100px] sm:w-[220px] sm:h-[120px] lg:w-[280px] lg:h-[140px] bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 lg:p-8 flex items-center justify-center hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-500 group relative overflow-hidden cursor-pointer"
              >
                {/* Lueur dorée interne au survol */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 blur-2xl" />

                {/* Logo : Gris et semi-transparent par défaut -> Couleur et net au survol */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 relative z-10"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}