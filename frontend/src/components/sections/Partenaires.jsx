import { motion } from "framer-motion";

export default function PartenairesCarousel() {
  const partners = [
    // { name: "Orange Côte d'Ivoire", logo: "/images/partenaires/logo1.jpg" },
  ];

  return (
    <section className="relative bg-zinc-950 py-24 overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full"
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
          <p className="text-gray-400 max-w-6xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Nous adressons nos remerciements distingués aux institutions et aux entreprises de référence qui, par leur engagement et leur confiance, accompagnent cette initiative.
          </p>
        </motion.div>

        {/* --- LOGO UNIQUE CENTRÉ (SANS DÉFILEMENT) --- */}
        <div className="flex justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-none w-[220px] h-[120px] lg:w-[320px] lg:h-[160px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-center hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Lueur dorée interne au survol */}
              <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 blur-2xl" />

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 relative z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}