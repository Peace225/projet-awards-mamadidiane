import { motion, AnimatePresence } from "framer-motion";

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
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 hover:text-yellow-400 transition font-semibold"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block ml-1"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-10 left-0 bg-black border border-gray-700 rounded-lg w-64 max-h-60 overflow-y-auto shadow-lg z-50"
          >
            {items.map((item, idx) => (
              <button
                key={idx}
                className="w-full text-left px-4 py-2 hover:bg-gray-800 transition text-sm"
                onClick={() => onItemClick(item.link)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}