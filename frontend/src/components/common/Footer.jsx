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
    <footer className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 pt-12">

      {/* Effet de brillance */}
      <motion.div
        className="absolute top-0 left-[-50%] w-1/2 h-full bg-white opacity-20 transform rotate-12 blur-xl"
        animate={{ x: ["-50%", "150%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />

      {/* Sections principales */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">

        {/* À propos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-bold mb-4">À PROPOS</h4>
          <p className="text-gray-900 text-sm">
            Les Awards Mamadi Diane valorisent le leadership, l'impact social et l'excellence entrepreneuriale.
          </p>
        </motion.div>

        {/* Liens rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-bold mb-4">LIENS UTILES</h4>
          <ul className="space-y-2">
            <li><a href="/apropos" className="hover:text-yellow-700 transition-colors">Qui sommes-nous</a></li>
            <li><a href="/candidater" className="hover:text-yellow-700 transition-colors">Candidater</a></li>
            <li><a href="/programme" className="hover:text-yellow-700 transition-colors">Programme</a></li>
            <li><a href="/contact" className="hover:text-yellow-700 transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        {/* Catégories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h4 className="font-bold mb-4">CATÉGORIES</h4>
          <ul className="space-y-2 text-sm max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-700 scrollbar-track-yellow-300">
            <li><a href="/categorie/grand-prix-leadership-institutionnel" className="hover:text-yellow-900 transition-colors">Grand Prix Leadership</a></li>
            <li><a href="/categorie/prix-diplomatie-influence-strategique" className="hover:text-yellow-900 transition-colors">Diplomatie & Influence</a></li>
            <li><a href="/categorie/prix-femme-leader-impact" className="hover:text-yellow-900 transition-colors">Femme Leader Impact</a></li>
            <li><a href="/categorie/prix-jeune-leader-excellence" className="hover:text-yellow-900 transition-colors">Jeune Leader Excellence</a></li>
            <li><a href="/categorie/prix-transformation-sociale" className="hover:text-yellow-900 transition-colors">Transformation Sociale</a></li>
            <li><a href="/categorie/prix-excellence-entrepreneuriale-responsable" className="hover:text-yellow-900 transition-colors">Excellence Entrepreneuriale</a></li>
          </ul>
        </motion.div>

        {/* Contact & réseaux sociaux */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h4 className="font-bold mb-4">CONTACT</h4>
          <p className="text-gray-900 text-sm mb-4">info@awardsmamadidiane.com</p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {socialIcons.map((s, i) => (
              <motion.a 
                key={i} 
                href={s.link} 
                whileHover={{ scale: 1.2, color: "#B45309" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-900"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bas du footer */}
      <div className="relative z-10 border-t border-yellow-700 py-4 text-sm text-gray-900 text-center">
        © {new Date().getFullYear()} Awards Mamadi Diane — Tous droits réservés
      </div>
    </footer>
  );
}