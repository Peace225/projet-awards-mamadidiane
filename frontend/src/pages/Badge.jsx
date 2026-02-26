import { motion } from "framer-motion";
import { Ticket, User, Info, MessageSquare, Send, ShieldCheck } from "lucide-react";

export default function Badge() {
  // Styles réutilisables pour une cohérence parfaite avec le reste du site
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300";
  const labelStyle = "block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase text-xs";

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight">
            Réservation de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Badge</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed font-light">
            Réservez votre place pour assister à la prestigieuse cérémonie officielle des Awards Mamadi Diané. Une soirée d'excellence et de célébration.
          </p>
        </motion.div>
      </section>

      {/* --- FORMULAIRE ET INSTRUCTIONS --- */}
      <section className="pb-16 md:pb-24 max-w-4xl mx-auto px-6 relative z-10 space-y-10">

        {/* Instructions en Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md p-6 sm:p-8 rounded-3xl flex items-start gap-4 sm:gap-6 shadow-lg"
        >
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-500 mt-1">
            <Info size={24} />
          </div>
          <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
            <p>
              <strong className="text-white">Attention :</strong> Remplissez soigneusement ce formulaire pour générer votre accréditation.
            </p>
            <p className="text-gray-400">
              Votre badge nominatif vous sera envoyé par email après validation de votre profil par notre comité d'organisation.
            </p>
          </div>
        </motion.div>

        {/* Le Formulaire VIP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Lueur interne du formulaire */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />

          <form className="space-y-10 relative z-10">

            {/* === INFORMATIONS PERSONNELLES === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <User className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Informations Personnelles</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyle}>Nom *</label>
                  <input type="text" placeholder="Votre nom" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Prénoms *</label>
                  <input type="text" placeholder="Vos prénoms" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Email Officiel *</label>
                  <input type="email" placeholder="adresse@email.com" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Téléphone *</label>
                  <input type="tel" placeholder="+225 00 00 00 00 00" className={inputStyle} required />
                </div>
                <div className="md:col-span-2">
                  <label className={labelStyle}>Adresse (Ville, Pays)</label>
                  <input type="text" placeholder="Ex: Abidjan, Côte d'Ivoire" className={inputStyle} />
                </div>
              </div>
            </div>

            {/* === PROFIL DU PARTICIPANT === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <ShieldCheck className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Profil & Accréditation</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelStyle}>Type d'accréditation *</label>
                  {/* Utilisation de la correction du texte noir sur les <option> */}
                  <select className={`${inputStyle} appearance-none cursor-pointer`} defaultValue="" required>
                    <option value="" disabled className="text-gray-900 bg-white">Sélectionnez votre profil...</option>
                    <option value="participant" className="text-gray-900 bg-white">Participant Standard</option>
                    <option value="vip" className="text-gray-900 bg-white">Invité VIP (Sur invitation)</option>
                    <option value="partenaire" className="text-gray-900 bg-white">Sponsor / Partenaire</option>
                    <option value="presse" className="text-gray-900 bg-white">Média / Presse Officielle</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle}>Organisation / Société</label>
                  <input type="text" placeholder="Nom de votre structure" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Fonction / Titre</label>
                  <input type="text" placeholder="Votre poste" className={inputStyle} />
                </div>
              </div>
            </div>

            {/* === REMARQUES === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <MessageSquare className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Besoins Spécifiques</h3>
              </div>
              <div>
                <label className={labelStyle}>Remarques ou restrictions (Optionnel)</label>
                <textarea
                  placeholder="Indiquez ici vos besoins logistiques, allergies alimentaires ou toute autre demande..."
                  className={`${inputStyle} h-32 resize-none`}
                />
              </div>
            </div>

            {/* === BOUTON SOUMETTRE === */}
            <div className="pt-4 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 group"
              >
                <span>Réserver mon badge</span>
                <Ticket size={20} className="transform group-hover:rotate-12 transition-transform" />
              </motion.button>
              <p className="text-gray-500 text-xs mt-4 flex items-center justify-center gap-2">
                Un email de confirmation vous sera envoyé instantanément.
              </p>
            </div>

          </form>
        </motion.div>

      </section>
    </div>
  );
}