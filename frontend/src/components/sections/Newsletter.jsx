import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription pour :", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-yellow-500/30">
          
          {/* Côté Gauche : Design & Texte */}
          <div className="bg-yellow-500 p-10 md:w-2/5 flex flex-col justify-center text-zinc-900">
            <h3 className="font-black text-2xl uppercase tracking-tighter leading-none mb-4">
              Restez <br /> Informé
            </h3>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">
              Awards Mamadi Diane 2026
            </p>
            <div className="w-12 h-1 bg-zinc-900 mt-4"></div>
          </div>

          {/* Côté Droite : Formulaire */}
          <div className="p-10 md:w-3/5 bg-white flex flex-col justify-center">
            {!submitted ? (
              <>
                <h4 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-2">
                  Abonnez-vous à la newsletter
                </h4>
                <p className="text-gray-500 text-sm mb-6 font-medium">
                  Recevez les exclusivités sur les nominés et l'ouverture de la billetterie.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative w-full">
                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-zinc-100 border-none rounded-xl focus:ring-2 focus:ring-yellow-500 text-zinc-900 font-bold placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-600 hover:text-zinc-900 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    S'inscrire
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-4 animate-in fade-in duration-500">
                <CheckCircle2 size={60} className="text-green-500 mb-4" />
                <h4 className="text-xl font-black text-zinc-900 uppercase">Félicitations !</h4>
                <p className="text-gray-500 font-medium text-sm">
                  Vous êtes bien inscrit pour l'édition 2027.
                </p>
              </div>
            )}
            
            <p className="mt-4 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
              * Nous respectons votre vie privée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}