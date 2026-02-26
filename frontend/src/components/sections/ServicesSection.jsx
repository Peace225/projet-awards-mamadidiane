export default function ServicesSection() {
  const services = [
    {
      title: "Développement Web",
      desc: "Sites modernes, sécurisés et évolutifs",
    },
    {
      title: "Design UI/UX",
      desc: "Interfaces claires, accessibles et professionnelles",
    },
    {
      title: "Maintenance & Support",
      desc: "Suivi technique, mises à jour et assistance continue",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-gray-600">
            Des solutions digitales adaptées aux organisations modernes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
