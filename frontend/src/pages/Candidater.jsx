import { motion } from "framer-motion";
import { User, Briefcase, FolderGit2, Award, Send, CheckCircle, UploadCloud } from "lucide-react";

export default function Candidater() {
  // Style réutilisable pour les inputs pour garder le code propre
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300";
  const labelStyle = "block text-sm font-semibold text-gray-300 mb-2 tracking-wide";

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"
        />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6 z-10">
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
            Candidature <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Officielle</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed font-light">
            Saisissez l'opportunité de valoriser votre impact et votre leadership. Soumettez votre dossier pour participer à la distinction la plus prestigieuse de l'année.
          </p>
        </motion.div>
      </section>

      {/* --- ÉTAPES DE CANDIDATURE --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Profil", desc: "Renseignez vos informations et votre parcours.", icon: User },
            { title: "Dossier", desc: "Détaillez votre projet et joignez les justificatifs.", icon: FolderGit2 },
            { title: "Validation", desc: "Étude de votre dossier par le comité d'experts.", icon: CheckCircle },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] text-center group hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-900 border border-yellow-500 text-yellow-500 rounded-full flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                {index + 1}
              </div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-yellow-500 mt-4">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white tracking-wide uppercase">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FORMULAIRE --- */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Lueur interne du formulaire */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-widest mb-4">
              Dossier de candidature
            </h2>
            <p className="text-gray-400 text-sm">Veuillez remplir tous les champs obligatoires avec précision.</p>
          </div>

          <form className="space-y-12 relative z-10">

            {/* === INFORMATIONS PERSONNELLES === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <User className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Identité</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyle}>Nom *</label>
                  <input type="text" placeholder="Nom" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Prénoms *</label>
                  <input type="text" placeholder="Prénoms" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Email *</label>
                  <input type="email" placeholder="adresse@email.com" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Téléphone *</label>
                  <input type="tel" placeholder="+225 00 00 00 00 00" className={inputStyle} required />
                </div>
                <div>
                  <label className={labelStyle}>Nationalité</label>
                  <input type="text" placeholder="Ex: Ivoirienne" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Ville & Pays</label>
                  <input type="text" placeholder="Ex: Abidjan, Côte d'Ivoire" className={inputStyle} />
                </div>
              </div>
            </div>

            {/* === INFORMATIONS PROFESSIONNELLES === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <Briefcase className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Professionnel</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelStyle}>Organisation / Société</label>
                  <input type="text" placeholder="Nom de votre structure" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Fonction / Titre</label>
                  <input type="text" placeholder="Votre poste actuel" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Domaine d'activité</label>
                  <input type="text" placeholder="Ex: Technologie, Santé, Finance..." className={inputStyle} />
                </div>
              </div>
            </div>

            {/* === CATÉGORIE & PROJET === */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
                <Award className="text-yellow-500" size={24} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Projet & Catégories</h3>
              </div>
              
              <div>
                <label className={labelStyle}>Catégorie de candidature *</label>
                {/* On enlève le bg-zinc-900 ici pour laisser l'apparence native propre */}
                <select className={`${inputStyle} appearance-none cursor-pointer`} defaultValue="" required>
                  {/* On force le texte en noir et le fond en blanc spécifiquement pour les options du menu déroulant */}
                  <option value="" disabled className="text-gray-900 bg-white font-medium">Sélectionnez la catégorie visée...</option>
                  <option value="institutionnel" className="text-gray-900 bg-white">Leadership Institutionnel</option>
                  <option value="diplomatie" className="text-gray-900 bg-white">Diplomatie & Coopération Stratégique</option>
                  <option value="paix" className="text-gray-900 bg-white">Médiation & Consolidation de la Paix</option>
                  <option value="feminin" className="text-gray-900 bg-white">Leadership Féminin & Impact Public</option>
                  <option value="innovation" className="text-gray-900 bg-white">Innovation & Jeunesse</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Titre du projet ou de l'initiative *</label>
                <input type="text" placeholder="Comment s'intitule votre action ?" className={inputStyle} required />
              </div>

              <div>
                <label className={labelStyle}>Description détaillée *</label>
                <textarea
                  placeholder="Décrivez l'impact, les objectifs et les résultats de votre initiative..."
                  rows="6"
                  className={`${inputStyle} resize-none`}
                  required
                />
              </div>

              {/* Upload de fichier stylisé */}
              <div>
                <label className={labelStyle}>Documents justificatifs (Optionnel)</label>
                <div className="relative border-2 border-dashed border-white/20 hover:border-yellow-500/50 rounded-2xl p-8 text-center transition-colors cursor-pointer group bg-white/5">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
                  <UploadCloud className="mx-auto text-gray-400 group-hover:text-yellow-500 mb-4 transition-colors" size={36} />
                  <p className="text-gray-300 text-sm font-medium mb-1">Cliquez ou glissez-déposez vos fichiers ici</p>
                  <p className="text-gray-500 text-xs">PDF, DOCX, JPG ou PNG (Max 10MB)</p>
                </div>
              </div>
            </div>

            {/* === CONSENTEMENT === */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-1">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-500 rounded cursor-pointer checked:bg-yellow-500 checked:border-yellow-500 transition-colors" required />
                  <CheckCircle className="absolute text-black opacity-0 peer-checked:opacity-100 w-4 h-4 pointer-events-none" strokeWidth={3} />
                </div>
                <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Je certifie sur l'honneur que les informations fournies dans ce dossier sont exactes. J'autorise le comité d'organisation des Awards Mamadi Diané à traiter mes données dans le cadre de cette candidature.
                </span>
              </label>
            </div>

            {/* === BOUTON SOUMETTRE === */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300"
            >
              <span>Soumettre ma candidature</span>
              <Send size={18} />
            </motion.button>

          </form>
        </motion.div>
      </section>
    </div>
  );
}