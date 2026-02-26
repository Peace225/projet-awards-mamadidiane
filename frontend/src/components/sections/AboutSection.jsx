export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-4">
            À propos de nous
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nous sommes une organisation engagée dans la transformation
            digitale au service du développement, de l’innovation et de
            l’impact social durable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Notre mission est de concevoir des solutions numériques fiables,
            accessibles et adaptées aux besoins institutionnels et humanitaires.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 shadow">
          <h3 className="text-xl font-semibold mb-2">Notre vision</h3>
          <p className="text-gray-600">
            Utiliser le digital comme levier de transparence, d’efficacité
            et de communication stratégique.
          </p>
        </div>

      </div>
    </section>
  )
}
