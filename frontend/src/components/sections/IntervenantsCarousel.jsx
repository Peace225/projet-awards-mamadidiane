import { motion } from "framer-motion";

export default function Intervenants() {
  const speakers = [
    {
      name: "Mamadi Diané",
      title: "Fondateur & CEO",
      image: "/images/image1.jpeg",
    },
    {
      name: "Aissatou Kone",
      title: "Entrepreneure",
      image: "/images/image2.jpg",
    },
    {
      name: "Jean-Pierre Kouadio",
      title: "Innovateur Tech",
      image: "/images/image3.png",
    },
    {
      name: "Fatoumata Diallo",
      title: "Mentor Leadership",
      image: "/images/image6.png",
    },
    {
      name: "Mamadi Diané",
      title: "Fondateur & CEO",
      image: "/images/image8.png",
    },
    {
      name: "Aissatou Kone",
      title: "Entrepreneure",
      image: "/images/image7.png",
    },
    {
      name: "Jean-Pierre Kouadio",
      title: "Innovateur Tech",
      image: "/images/image3.png",
    },
    {
      name: "Fatoumata Diallo",
      title: "Mentor Leadership",
      image: "/images/image6.png",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND AWARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Texture de fond pointillée */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Projecteurs dorés */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1], x: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2], x: [50, -50, 50] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">Intervenants</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Découvrez les experts et leaders d'opinion qui partageront leur vision et leur expérience lors du prestigieux gala des Awards Mamadi Diané.
          </p>
        </motion.div>

        {/* --- CARTES INTERVENANTS (Portraits Cinématographiques) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.15 }} // Animation en cascade ligne par ligne
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 hover:border-yellow-500/50 transition-all duration-500 aspect-[3/4] shadow-2xl cursor-pointer"
            >
              {/* Image d'arrière-plan */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-in-out filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Dégradé de superposition pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Halo lumineux au survol (Glow) */}
              <div className="absolute -bottom-10 -left-10 w-[150%] h-1/2 bg-yellow-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Contenu Textuel */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Petite ligne dorée qui apparaît au survol */}
                <div className="w-8 h-1 bg-yellow-500 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform -translate-x-4 group-hover:translate-x-0" />
                
                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-1 drop-shadow-md leading-none">
                  {speaker.name}
                </h3>
                
                <p className="text-yellow-400 font-bold tracking-widest text-xs lg:text-sm uppercase drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  {speaker.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}