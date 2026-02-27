import React from 'react';

const MamadiDianeParcours = () => {
  return (
    <section className="py-16 bg-gray-50" id="parcours-engagement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl uppercase tracking-widest">
            MAMADI DIANE <br className="sm:hidden" />
            <span className="text-yellow-500 hidden sm:inline"> – </span> 
            <span className="text-gray-700">PARCOURS & ENGAGEMENT</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-yellow-500 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Espace pour la photo (Fixe sur le côté sur grand écran) */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-24">
  {/* On remplace aspect-[4/5] par aspect-[4/3] ou aspect-video */}
  <div className="bg-gray-200 w-full aspect-[4/3] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border-4 border-white">
    <img 
      src="/images/mamadi.jpeg" 
      alt="Portrait de Mamadi Diane" 
      className="object-cover w-full h-full"
      onError={(e) => {
        e.target.onerror = null; 
        {/* J'ai aussi inversé les dimensions du placeholder pour qu'il soit paysage */}
        e.target.src = "https://via.placeholder.com/800x600?text=Photo+Mamadi+Diane";
      }}
    />
  </div>
</div>

          {/* Contenu Texte organisé en 4 blocs */}
          <div className="lg:w-2/3 w-full space-y-8">
            
            {/* Bloc 1 : Trajectoire */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide border-b border-yellow-500/30 pb-2">
                Une trajectoire au service de l’intérêt général
              </h3>
              <div className="text-gray-600 leading-relaxed text-justify space-y-4">
                <p>Le parcours de Mamadi Diane s’inscrit dans une dynamique d’engagement constant, guidée par le sens de la responsabilité et le respect des institutions.</p>
                <p>À travers les fonctions qu’il a exercées, il a incarné une conception exigeante du service public : agir avec rigueur, décider avec discernement et toujours privilégier l’intérêt supérieur de la Nation.</p>
                <p>Son itinéraire ne se résume pas à des titres. Il témoigne d’une fidélité aux principes, d’une constance dans l’effort et d’une volonté d’inscrire chaque action dans la durée.</p>
              </div>
            </div>

            {/* Bloc 2 : Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide border-b border-yellow-500/30 pb-2">
                Une vision structurante
              </h3>
              <p className="text-gray-600 mb-4">Mamadi Diane s’est distingué par :</p>
              <ul className="space-y-3 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  Une lecture stratégique des enjeux institutionnels
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  Une capacité à rassembler autour de projets structurants
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  Une approche fondée sur la stabilité et la cohérence
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  Une volonté de transmission des valeurs républicaines
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-justify font-medium">
                Son engagement ne relevait pas de la circonstance, mais d’une conviction profonde : servir avec loyauté et construire avec méthode.
              </p>
            </div>

            {/* Bloc 3 : Engagement */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide border-b border-yellow-500/30 pb-2">
                Engagement & Responsabilité
              </h3>
              <p className="text-gray-600 mb-4">Au-delà des responsabilités assumées, son engagement se manifestait dans :</p>
              <ul className="space-y-3 mb-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  La promotion du dialogue
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  Le respect des équilibres institutionnels
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  L’exigence éthique
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg font-bold">✓</span>
                  La défense d’une gouvernance responsable
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-justify font-medium">
                Il a laissé une empreinte faite de mesure, de vision et d’élévation.
              </p>
            </div>

            {/* Bloc 4 : Héritage */}
            <div className="bg-black p-8 rounded-2xl shadow-lg border border-yellow-500/20 transition-all hover:shadow-xl">
              <h3 className="text-xl font-black text-yellow-400 mb-4 uppercase tracking-wide border-b border-yellow-500/30 pb-2">
                Un héritage vivant
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Les Awards Mamadi Diane s’inscrivent dans la continuité de cet engagement. Ils visent à distinguer des femmes et des hommes qui, à leur tour, incarnent :
              </p>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Le leadership responsable
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  L’engagement institutionnel
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  L’impact durable
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  La vision stratégique
                </li>
              </ul>
              <p className="text-white text-lg font-semibold leading-relaxed">
                Honorer son parcours, c’est perpétuer une exigence.<br/>
                <span className="text-yellow-400">C’est inscrire l’action présente dans la mémoire de l’excellence.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MamadiDianeParcours;