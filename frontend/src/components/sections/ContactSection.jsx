export default function ContactSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-gray-300">
            Une question, un projet ou une collaboration ?
            Écrivez-nous et notre équipe vous répondra rapidement.
          </p>
        </div>

        <form className="bg-white text-black p-8 rounded-xl shadow space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Nom complet"
          />
          <input
            className="w-full border p-3 rounded"
            placeholder="Adresse email"
          />
          <textarea
            rows="4"
            className="w-full border p-3 rounded"
            placeholder="Votre message"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold">
            Envoyer le message
          </button>
        </form>

      </div>
    </section>
  )
}
