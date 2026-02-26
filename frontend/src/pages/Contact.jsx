import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function ContactSection() {
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300";
  const labelStyle = "block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase text-xs";

  const contactInfo = [
    { icon: MapPin, title: "Siège Officiel", detail: "Abidjan, Côte d'Ivoire. (Adresse complète sur invitation)" },
    { icon: Phone, title: "Ligne Directe", detail: "+225 00 00 00 00 00" },
    { icon: Mail, title: "Email Officiel", detail: "contact@awards-mamadidiane.com" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <section className="relative bg-zinc-950 min-h-screen py-24 px-6 overflow-hidden flex items-center">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1], x: [-50, 0, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2], x: [50, 0, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- EN-TÊTE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 uppercase">Contacter</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Une question sur les candidatures, une proposition de partenariat ou une demande presse ? Notre comité d'organisation est à votre écoute.
          </p>
        </motion.div>

        {/* --- CONTENU DEUX COLONNES --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* COLONNE GAUCHE : Informations */}
          <div className="w-full lg:w-5/12 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full pointer-events-none" />

              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-8">
                Comité d'Organisation
              </h3>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <info.icon size={24} className="text-yellow-500 group-hover:text-black transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-1">{info.title}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux Sociaux */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Suivez l'événement</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-yellow-500 hover:border-transparent hover:scale-110 transition-all duration-300"
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLONNE DROITE : Formulaire */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full"
            >
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
                Envoyer un message
              </h3>
              <p className="text-gray-400 text-sm mb-10">Nous vous répondrons dans les plus brefs délais.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelStyle}>Nom Complet *</label>
                    <input type="text" placeholder="Ex: Jean Dupont" className={inputStyle} required />
                  </div>
                  <div>
                    <label className={labelStyle}>Adresse Email *</label>
                    <input type="email" placeholder="contact@email.com" className={inputStyle} required />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Sujet *</label>
                  <select className={`${inputStyle} appearance-none cursor-pointer`} defaultValue="" required>
                    <option value="" disabled className="text-gray-900 bg-white">Sélectionnez l'objet de votre demande...</option>
                    <option value="candidature" className="text-gray-900 bg-white">Assistance Candidature</option>
                    <option value="partenariat" className="text-gray-900 bg-white">Devenir Partenaire / Sponsor</option>
                    <option value="presse" className="text-gray-900 bg-white">Accréditation Presse</option>
                    <option value="autre" className="text-gray-900 bg-white">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className={labelStyle}>Votre Message *</label>
                  <textarea
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows="5"
                    className={`${inputStyle} resize-none`}
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 group mt-4"
                >
                  <span>Envoyer le message</span>
                  <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}