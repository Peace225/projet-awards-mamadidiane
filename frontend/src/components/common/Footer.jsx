import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 pt-10">

      {/* Effet de brillance animé */}
      <motion.div
        className="absolute top-0 left-[-50%] w-1/2 h-full bg-white opacity-20 transform rotate-12 blur-xl pointer-events-none"
        animate={{ x: ["-50%", "150%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />

      {/* Sections principales */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">

        {/* --- À propos avec LOGO en bas --- */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <h4 className="font-black mb-3 uppercase tracking-widest text-[10px]">À PROPOS</h4>
          <p className="text-gray-900 text-[11px] leading-relaxed text-center md:text-left font-medium mb-5">
            Les Awards Mamadi Diane valorisent le leadership, l'impact social et l'excellence entrepreneuriale à travers le continent.
          </p>
          
          {/* LOGO placé en bas de la description */}
          <img 
            src="/images/logo.png" 
            alt="Logo Awards" 
            className="w-16 h-16 object-contain rounded-full border border-yellow-700/50 shadow-lg bg-black transition-transform hover:scale-110 duration-300"
          />
        </motion.div>

        {/* Liens rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-black mb-3 uppercase tracking-widest text-[10px]">LIENS UTILES</h4>
          <ul className="space-y-1.5 text-[11px] font-semibold">
            <li><a href="/apropos" className="hover:text-white transition-colors">Qui sommes-nous</a></li>
            <li><a href="/candidater" className="hover:text-white transition-colors">Candidater</a></li>
            <li><a href="/programme" className="hover:text-white transition-colors">Programme</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        {/* Catégories */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h4 className="font-black mb-3 uppercase tracking-widest text-[10px]">CATÉGORIES</h4>
          <ul className="space-y-1.5 text-[10px] font-semibold max-h-40 overflow-y-auto pr-2 custom-scrollbar">
            <li><a href="/categorie/leadership" className="hover:text-white transition-colors">Grand Prix Leadership</a></li>
            <li><a href="/categorie/diplomatie" className="hover:text-white transition-colors">Diplomatie & Influence</a></li>
            <li><a href="/categorie/femme" className="hover:text-white transition-colors">Femme Leader Impact</a></li>
            <li><a href="/categorie/jeune" className="hover:text-white transition-colors">Jeune Leader Excellence</a></li>
            <li><a href="/categorie/sociale" className="hover:text-white transition-colors">Transformation Sociale</a></li>
          </ul>
        </motion.div>

        {/* Contact & Réseaux */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <h4 className="font-black mb-3 uppercase tracking-widest text-[10px]">CONTACT</h4>
          <p className="text-gray-900 text-[11px] font-bold mb-4 italic">info@awardsmamadidiane.com</p>
          <div className="flex items-center gap-3">
            {socialIcons.map((s, i) => (
              <motion.a 
                key={i} 
                href={s.link} 
                whileHover={{ scale: 1.15, y: -3 }}
                className="bg-black/10 hover:bg-black hover:text-yellow-500 p-2 rounded-full text-xs transition-all border border-black/5"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bas du footer */}
      <div className="relative z-10 border-t border-yellow-700/10 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-gray-900 text-center opacity-80">
        © {new Date().getFullYear()} Awards Mamadi Diane — Prestige & Excellence
      </div>
    </footer>
  );
}