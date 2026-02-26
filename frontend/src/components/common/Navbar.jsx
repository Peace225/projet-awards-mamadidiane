import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import Dropdown from "../Dropdown";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // --- Sous-menus ---
  const aproposItems = [
    { label: "Qui sommes nous", link: "#qui-sommes-nous" },
    { label: "Nos valeurs", link: "#nos-valeurs" },
    { label: "Nos missions", link: "#nos-missions" },
  ];

  const partenairesItems = [
    { label: "Devenir Partenaire", link: "/devenir-partenaire" },
    { label: "Devenir Sponsor", link: "/devenir-sponsor" },
  ];

  const mediasItems = [
    { label: "Photos", link: "/photos" },
    { label: "Vidéos", link: "/videos" },
  ];

  // --- STRUCTURE UNIQUE POUR L'ORDRE DES LIENS ---
  const navStructure = [
    { type: "dropdown", title: "À PROPOS", items: aproposItems, key: "apropos" },
    { type: "link", title: "CATÉGORIES", link: "/categories" },
    { type: "dropdown", title: "PARTENAIRES", items: partenairesItems, key: "partenaires" },
    { type: "link", title: "CANDIDATER", link: "/candidater" },
    { type: "link", title: "ACTUALITÉS", link: "/actualites" },
    { type: "dropdown", title: "MÉDIAS", items: mediasItems, key: "medias" },
    { type: "link", title: "CONTACT", link: "/contact" },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (link) => {
    if (link.startsWith("#")) {
      navigate("/apropos" + link);
    } else {
      navigate(link);
    }
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav ref={navbarRef} className="bg-black text-white px-4 md:px-6 py-4 sticky top-0 z-50 shadow-2xl border-b border-white/10 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={Logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full border border-yellow-500/50 group-hover:scale-105 transition-transform" />
          <h1 className="font-black text-sm md:text-lg tracking-tighter uppercase">Awards Mamadi Diane</h1>
        </Link>

        {/* Bouton Mobile */}
        <button className="lg:hidden text-yellow-400" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
          {navStructure.map((item, idx) => (
            item.type === "dropdown" ? (
              <Dropdown
                key={item.key}
                title={item.title}
                items={item.items}
                isOpen={openMenu === item.key}
                onToggle={() => setOpenMenu(openMenu === item.key ? null : item.key)}
                onMouseEnter={() => setOpenMenu(item.key)}
                onMouseLeave={() => setOpenMenu(null)}
                onItemClick={handleItemClick}
              />
            ) : (
              <Link 
                key={idx} 
                to={item.link} 
                className="hover:text-yellow-400 transition text-xs font-black tracking-widest uppercase"
              >
                {item.title}
              </Link>
            )
          ))}

          <Link to="/badge" className="bg-yellow-400 text-black px-5 py-2 rounded-full font-black text-xs hover:bg-white transition duration-300 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            BADGE
          </Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 p-6 flex flex-col space-y-6 border-t border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]">
          {navStructure.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-3">
              {item.type === "dropdown" ? (
                <>
                  <span className="text-yellow-500 font-black text-xs tracking-[0.2em] uppercase">{item.title}</span>
                  <div className="pl-4 flex flex-col space-y-3 border-l border-white/10">
                    {item.items.map((sub, sIdx) => (
                      <button key={sIdx} onClick={() => handleItemClick(sub.link)} className="text-left text-sm font-medium hover:text-yellow-400">
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.link} onClick={() => setIsMobileMenuOpen(false)} className="font-black text-sm tracking-widest uppercase hover:text-yellow-400">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link to="/badge" onClick={() => setIsMobileMenuOpen(false)} className="bg-yellow-400 text-black text-center py-3 rounded-xl font-black uppercase">
            Réserver mon Badge
          </Link>
        </div>
      )}
    </nav>
  );
}