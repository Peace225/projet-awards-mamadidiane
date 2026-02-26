import { motion } from "framer-motion";
import { CheckCircle, Crown, Star, Shield, Medal } from "lucide-react";
import SponsorImage from "../components/assets/sponsor.png"; // Garde ton import

export default function DevenirSponsor() {
  
  // Structuration des offres pour un code propre et dynamique
  const sponsorshipTiers = [
    {
      name: "Platine",
      subtitle: "Sponsor Principal Officiel",
      icon: Crown,
      themeColor: "text-gray-100",
      borderColor: "group-hover:border-gray-300",
      glowColor: "from-gray-200/20",
      desc: "Le positionnement exclusif et prioritaire sur l’ensemble des supports de l'événement.",
      visibility: [
        "Logo en position dominante sur TOUS les supports",
        "Mention officielle lors de toutes les interventions",
        "Présence exclusive sur le tapis rouge et le fond presse",
        "Prise de parole institutionnelle pendant la cérémonie",
      ],
      benefits: [
        "Table VIP premium au premier rang",
        "Accès exclusif aux personnalités et invités officiels",
        "Visibilité médiatique maximale (Interviews, RP)",
      ]
    },
    {
      name: "Or",
      subtitle: "Sponsor Officiel",
      icon: Star,
      themeColor: "text-yellow-400",
      borderColor: "group-hover:border-yellow-400",
      glowColor: "from-yellow-500/20",
      desc: "Une visibilité renforcée et un positionnement stratégique au cœur du gala.",
      visibility: [
        "Logo sur les supports officiels de communication",
        "Mention dans les communiqués de presse",
        "Présence en bonne place sur le site internet",
        "Branding dédié sur écran pendant la cérémonie",
      ],
      benefits: [
        "Table VIP idéalement placée",
        "Invitations privilégiées pour la soirée",
      ]
    },
    {
      name: "Argent",
      subtitle: "Sponsor Officiel",
      icon: Shield,
      themeColor: "text-slate-300",
      borderColor: "group-hover:border-slate-400",
      glowColor: "from-slate-400/20",
      desc: "Associez-vous à la dynamique d’excellence avec une visibilité ciblée et élégante.",
      visibility: [
        "Logo sur la page partenaires du site web",
        "Mention dans le programme officiel distribué aux invités",
        "Présence sur nos supports digitaux et réseaux sociaux",
      ],
      benefits: [
        "Invitations de courtoisie pour la cérémonie",
      ]
    },
    {
      name: "Bronze",
      subtitle: "Soutien Officiel",
      icon: Medal,
      themeColor: "text-orange-400",
      borderColor: "group-hover:border-orange-500",
      glowColor: "from-orange-500/20",
      desc: "Une opportunité d’engagement accessible pour marquer votre soutien à l’événement.",
      visibility: [
        "Logo sur le site web",
        "Mention dans la brochure officielle de l'événement",
      ],
      benefits: [
        "Accès à la cérémonie officielle",
      ]
    },
  ];

  return (
    <section className="relative bg-zinc-950 text-white min-h-screen py-24 px-4 md:px-6 overflow-hidden">

      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs d'ambiance */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [-50, 0, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.2, 1, 1.2], y: [50, 0, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nos offres de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Sponsoring</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Découvrez nos packages exclusifs et choisissez le niveau d'engagement qui correspond à vos ambitions stratégiques et à votre image de marque.
          </p>
        </motion.div>

        {/* --- LAYOUT ASYMÉTRIQUE (Cartes à gauche, Image sticky à droite) --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* COLONNE GAUCHE : Les Offres (Scrollable) */}
          <div className="w-full lg:w-7/12 space-y-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl ${tier.borderColor}`}
              >
                {/* Lueur interne dynamique selon le tier */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${tier.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl`} />

                {/* En-tête de la carte */}
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm ${tier.themeColor} group-hover:scale-110 transition-transform duration-500`}>
                    <tier.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-widest ${tier.themeColor}`}>
                      {tier.name}
                    </h2>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mt-1">{tier.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 font-medium italic">
                  "{tier.desc}"
                </p>

                {/* Grille des avantages */}
                <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                  {/* Visibilité */}
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 pb-2 border-b border-white/10">
                      Visibilité
                    </h4>
                    <ul className="space-y-3">
                      {tier.visibility.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${tier.themeColor}`} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Avantages */}
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 pb-2 border-b border-white/10">
                      Privilèges
                    </h4>
                    <ul className="space-y-3">
                      {tier.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${tier.themeColor}`} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* COLONNE DROITE : Image (Sticky) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group overflow-hidden"
            >
              {/* Conteneur de l'image */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-zinc-900">
                <img
                  src={SponsorImage}
                  alt="Sponsor Awards Mamadi Diane"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Call to Action intégré à l'image */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-medium mb-6 text-sm drop-shadow-md">
                    Prêt à associer votre marque à l'événement le plus prestigieux de l'année ?
                  </p>
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300">
                    Contacter notre équipe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}