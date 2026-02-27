import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo.png";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navbarRef = useRef(null);
  const navigate = useNavigate();

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

  const navStructure = [
    { type: "dropdown", title: "A PROPOS", items: aproposItems, key: "apropos" },
    { type: "link", title: "CATÉGORIES", link: "/categories" },
    { type: "dropdown", title: "PARTENAIRES", items: partenairesItems, key: "partenaires" },
    { type: "link", title: "CANDIDATER", link: "/candidater" },
    { type: "link", title: "ACTUALITÉS", link: "/actualites" },
    { type: "dropdown", title: "MÉDIAS", items: mediasItems, key: "medias" },
    { type: "link", title: "CONTACT", link: "/contact" },
  ];

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
    setMobileDropdownOpen(null);
  };

  return (
    <nav
      ref={navbarRef}
      className="bg-black text-white px-4 md:px-6 py-3 sticky top-0 z-50 shadow-2xl border-b border-yellow-500/20 backdrop-blur-md bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full border border-yellow-500/50 group-hover:scale-105 transition-transform"
          />
          <h1 className="font-black text-yellow-400 text-xs sm:text-sm md:text-lg tracking-tighter uppercase">
            Awards Mamadi Diane
          </h1>
        </Link>

        {/* Burger */}
        <button
          className="lg:hidden text-yellow-400 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
          {navStructure.map((item, idx) =>
            item.type === "dropdown" ? (
              <Dropdown
                key={item.key}
                title={item.title}
                items={item.items}
                isOpen={openMenu === item.key}
                onToggle={() =>
                  setOpenMenu(openMenu === item.key ? null : item.key)
                }
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
          )}

          <Link
            to="/badge"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-black text-xs hover:bg-white transition duration-300"
          >
            BADGE
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-zinc-950 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          {navStructure.map((item, idx) => (
            <div key={idx} className="border-b border-white/5 pb-2">
              {item.type === "dropdown" ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        mobileDropdownOpen === item.key ? null : item.key
                      )
                    }
                    className="flex justify-between items-center w-full text-yellow-500 font-black text-xs tracking-widest uppercase py-2"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileDropdownOpen === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`pl-4 flex flex-col space-y-3 overflow-hidden transition-all duration-300 ${
                      mobileDropdownOpen === item.key
                        ? "max-h-40 mt-2 pb-2"
                        : "max-h-0"
                    }`}
                  >
                    {item.items.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleItemClick(sub.link)}
                        className="text-left text-sm font-medium text-gray-300 hover:text-yellow-400"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-black text-sm tracking-widest uppercase py-2 hover:text-yellow-400"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/badge"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-yellow-400 text-black text-center py-4 rounded-xl font-black uppercase tracking-widest"
          >
            Réserver mon Badge
          </Link>
        </div>
      </div>
    </nav>
  );
}