import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CalendarDays, Target, FileText, Download, Quote } from "lucide-react";

export default function Evenement() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const eventDate = useMemo(() => new Date("2027-05-16T18:00:00").getTime(), []);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    };
    setTimeLeft(calculateTime());
    const interval = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 3,
  })), []);

  const documents = [
    { name: "Programme officiel", link: "/documents/programme.pdf" },
    { name: "Dossier de présentation", link: "/documents/presentation.pdf" },
    { name: "Dossier de candidature", link: "/documents/candidature.pdf" },
    { name: "Dossier de sponsoring", link: "/documents/sponsoring.pdf" },
    { name: "Dossier de partenariat", link: "/documents/partenariat.pdf" },
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], x: [-50, 50, -50], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-400/20 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-600/15 blur-[130px] rounded-full"
        />

        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 shadow-[0_0_8px_rgba(250,204,21,0.6)] hidden lg:block" // Masqué sur mobile/tablette pour performance propre
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
        
        {/* SIDEBAR DOCUMENTS */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-28 order-last lg:order-first mt-8 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 border border-yellow-500/30 rounded-[2rem] shadow-2xl p-6 lg:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full pointer-events-none" />
            <h3 className="text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-6 flex items-center gap-3 uppercase tracking-widest">
              <FileText size={20} className="text-yellow-500" /> Documents
            </h3>
            
            <div className="space-y-3 relative z-10">
              {documents.map((doc, index) => (
                <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer"
                  className="group flex justify-between items-center bg-white/5 border border-white/5 p-3 md:p-4 rounded-2xl hover:bg-yellow-500/10 hover:border-yellow-500/50 backdrop-blur-md transition-all duration-300">
                  <span className="text-gray-300 group-hover:text-yellow-400 text-xs md:text-sm font-medium transition-colors line-clamp-1">{doc.name}</span>
                  <div className="bg-white/10 text-yellow-500 p-2 rounded-xl group-hover:bg-yellow-500 group-hover:text-black group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-2">
                    <Download size={14} strokeWidth={2.5} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* CONTENU PRINCIPAL */}
        <div className="flex-1 space-y-12 lg:space-y-20 w-full">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center lg:text-left space-y-6 lg:space-y-8 relative">
            <div className="h-1 w-16 lg:w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto lg:mx-0 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
              Cérémonie Officielle <br className="hidden lg:block" />
              <span className="hidden lg:inline"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600">
                16 Mai 2027
              </span>
            </h2>
            
            <div className="relative pt-4 lg:pt-6">
              <Quote size={60} className="absolute -top-4 -left-4 lg:-left-6 text-gray-200 opacity-50 rotate-180 z-0 hidden md:block" />
              <p className="relative z-10 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl font-medium px-2 lg:px-0">
                "Les Awards Mamadi Diane célèbrent des parcours à fort impact et consacrent des contributions durables au service de la Nation et du continent. Plus qu’une cérémonie, une empreinte."
              </p>
            </div>
          </motion.div>

          {/* COMPTE À REBOURS LUXE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-yellow-500/20 relative overflow-hidden group"
          >
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />

            <h3 className="text-[10px] sm:text-xs lg:text-sm font-black text-yellow-500 mb-6 lg:mb-10 uppercase tracking-[0.3em] lg:tracking-[0.5em] relative z-10">
              Lancement de la soirée
            </h3>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8 max-w-4xl mx-auto relative z-10">
              {[
                { label: "Jours", val: timeLeft.days },
                { label: "Heures", val: timeLeft.hours },
                { label: "Min", val: timeLeft.minutes },
                { label: "Sec", val: timeLeft.seconds }
              ].map((unit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-xl lg:rounded-[2rem] w-full py-4 sm:py-6 lg:py-10 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={unit.val}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="block text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-md"
                      >
                        {unit.val < 10 ? `0${unit.val}` : unit.val}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="mt-3 lg:mt-5 text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-yellow-500 font-bold">{unit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARTES INFO PREMIUM - NOUVEAU DESIGN RESPONSIVE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: MapPin, title: "Lieu Officiel", desc: "Abidjan, Côte d’Ivoire. Dans un cadre de prestige exceptionnel." },
              { icon: CalendarDays, title: "Date Clé", desc: "Samedi 16 Mai 2027. La grande soirée de gala annuelle." },
              { icon: Target, title: "Notre Mission", desc: "Mettre en lumière l'excellence professionnelle et l'impact positif." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }} 
                viewport={{ once: true }}
                // Ajout de "h-full flex flex-col" pour gérer l'égalité des hauteurs
                className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.12)] border border-gray-100 transition-all duration-500 overflow-hidden group text-left h-full flex flex-col"
              >
                {/* Ligne dorée animée en haut */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

                {/* Icône en style "App" */}
                <div className="mb-6 lg:mb-8 inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-yellow-50/50 text-yellow-600 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500 shadow-sm border border-yellow-100 group-hover:border-transparent relative z-10 flex-shrink-0">
                  <item.icon size={26} strokeWidth={1.5} className="lg:w-7 lg:h-7" />
                </div>

                {/* Textes : flex-1 permet de pousser l'élément vers le bas si besoin et égalise la zone */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h4 className="font-black text-gray-900 text-base md:text-lg lg:text-xl mb-2 lg:mb-3 uppercase tracking-wider group-hover:text-yellow-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Filigrane géant en arrière-plan */}
                <item.icon 
                  className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-32 h-32 lg:w-40 lg:h-40 text-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none z-0" 
                  strokeWidth={0.5} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}