import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Utilisation d'une icône plus fine

export default function Dropdown({
  title,
  items,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) {
  return (
    <div 
      className="relative" 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      {/* Bouton Principal */}
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 transition-all duration-300 text-[11px] font-black tracking-[0.15em] uppercase py-2
          ${isOpen ? "text-yellow-400" : "text-white/90 hover:text-yellow-400"}`}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
        >
          <ChevronDown size={14} strokeWidth={3} />
        </motion.div>
      </button>

      {/* Menu Déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-full left-0 mt-3 w-72 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden z-50"
          >
            {/* Barre de finition dorée en haut du menu */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            
            <div className="p-2 flex flex-col">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  className="group flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300 text-left"
                  onClick={() => onItemClick(item.link)}
                >
                  <span className="text-[13px] font-medium text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">
                    {item.label}
                  </span>
                  
                  {/* Indicateur discret au survol */}
                  <div className="w-1 h-1 rounded-full bg-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </button>
              ))}
            </div>

            {/* Effet de lumière interne (Glow) */}
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-yellow-500/10 blur-[40px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}