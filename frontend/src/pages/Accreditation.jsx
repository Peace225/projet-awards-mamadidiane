import { motion } from "framer-motion";

export default function Accreditation() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gray-900 text-yellow-500 py-16 md:py-20 text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 uppercase">
            Accréditation Presse - Awards Mamadi Diane
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Les représentants des médias souhaitant couvrir les Awards doivent
            compléter ce formulaire d’accréditation.
          </p>
        </motion.div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Infos importantes */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base">
            Les personnes ayant complété le formulaire d’accréditation seront informées par e-mail de la validation de leur demande.
          </p>
          <p className="text-sm sm:text-base">
            Les badges presse pourront être retirés sur le site dédié aux accréditations, sur présentation d’une pièce d’identité en cours de validité.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl uppercase font-bold text-center">
          Formulaire d’Accréditation
        </h2>

        <form className="space-y-8">

          {/* === INFORMATIONS PERSONNELLES === */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              INFORMATIONS PERSONNELLES
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="Nom" className="input w-full" required />
              <input type="text" placeholder="Prénoms" className="input w-full" required />
              <input type="text" placeholder="Nationalité" className="input w-full" required />
              <input type="text" placeholder="Adresse" className="input w-full" required />
              <input type="email" placeholder="Email" className="input w-full" required />
              <input type="text" placeholder="N° Passeport/CNI" className="input w-full" required />
              <input type="text" placeholder="Délivré par" className="input w-full" required />
              <input type="date" className="input w-full" required />
            </div>
          </div>

          {/* === COORDONNÉES DU MÉDIA === */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              COORDONNÉES DU MÉDIA
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="Nom de l’organe de presse" className="input w-full" required />
              <input type="text" placeholder=" Siège social du média" className="input w-full" required />
              <input type="text" placeholder="Adresse" className="input w-full" required />
              <input type="email" placeholder="Email" className="input w-full" required />
              <input type="tel" placeholder="Téléphone" className="input w-full" required />
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Type de média</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                {[
                  "Presse écrite ou agence",
                  "Presse digitale",
                  "Télévision",
                  "Technicien",
                  "Radio",
                  "Photographe",
                  "Cameraman",
                ].map((type, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="checkbox" className="accent-gray-900" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* BOUTON ENVOYER */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-900 text-white px-10 sm:px-12 py-3 sm:py-4 rounded-lg font-bold hover:bg-black transition w-full sm:w-auto"
            >
              ENVOYER
            </button>
          </div>

        </form>
      </section>
    </div>
  );
}