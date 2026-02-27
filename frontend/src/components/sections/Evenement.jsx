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

  const particles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
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

  const infoCards = [
    { icon: MapPin, title: "Lieu Officiel", desc: "Abidjan, Côte d’Ivoire. Dans un cadre de prestige exceptionnel." },
    { icon: CalendarDays, title: "Date Clé", desc: "Samedi 16 Mai 2027. La grande soirée de gala annuelle." },
    { icon: Target, title: "Notre Mission", desc: "Mettre en lumière l'excellence professionnelle et l'impact positif." }
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-12 md:py-24 px-4 overflow-hidden">
      
      {/* --- BACKGROUND ANIMÉ --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-400/20 blur-[120px] rounded-full"
        />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-yellow-400/30 hidden lg:block"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative z-10">
        
        {/* SIDEBAR DOCUMENTS (Mobile: En bas / Desktop: Collante à gauche) */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-28 order-last lg:order-first">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 border border-yellow-500/30 rounded-[2rem] p-6 lg:p-8 shadow-2xl"
          >
            <h3 className="text-lg font-black text-yellow-500 mb-6 flex items-center gap-3 uppercase tracking-widest">
              <FileText size={20} /> PIECES JOINTES
            </h3>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer"
                  className="group flex justify-between items-center bg-white/5 p-4 rounded-xl hover:bg-yellow-500/10 transition-all border border-transparent hover:border-yellow-500/30">
                  <span className="text-gray-300 group-hover:text-yellow-400 text-xs font-medium">{doc.name}</span>
                  <Download size={14} className="text-yellow-500 group-hover:scale-125 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* CONTENU PRINCIPAL */}
        <div className="flex-1 space-y-12 lg:space-y-20 w-full">
          
          {/* Titre et Citation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
            <div className="h-1 w-16 bg-yellow-500 mb-6 mx-auto lg:mx-0 rounded-full" />
            {/*  */}
            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-medium italic">
              "Les AWARDS MAMADI DIANE célèbrent des parcours à fort impact et consacrent des contributions durables."
            </p>
          </motion.div>

          {/* COMPTE À REBOURS RESPONSIVE */}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-[2rem] p-6 md:p-12 border border-yellow-500/20 shadow-2xl"
          >
            <div className="grid grid-cols-4 gap-2 md:gap-8">
              {[
                { label: "Jours", val: timeLeft.days },
                { label: "Heures", val: timeLeft.hours },
                { label: "Min", val: timeLeft.minutes },
                { label: "Sec", val: timeLeft.seconds }
              ].map((unit, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-white/5 rounded-xl md:rounded-3xl py-4 md:py-10 border border-white/10">
                    <span className="text-xl md:text-6xl font-black text-white block">
                      {unit.val < 10 ? `0${unit.val}` : unit.val}
                    </span>
                  </div>
                  <span className="mt-2 md:mt-4 block text-[8px] md:text-xs font-bold text-yellow-500 uppercase tracking-widest">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARTES INFO (Hauteur égale grâce à grid-cols-1 md:grid-cols-3) */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {infoCards.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-yellow-500/20 transition-all group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h4 className="font-black text-gray-900 uppercase text-lg mb-3 tracking-wide">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}