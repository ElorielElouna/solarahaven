import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const audio = new Audio("/Triélai.Elouna_1_sshhhh.god..mp3");
    audio.volume = 0.6;
    audio.play().catch((e) => {
      console.log("Audio afspilning kræver brugerinteraktion:", e);
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/uploads/background-spiral.png')" }}
    >
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg">
        Velkommen til Solara-portalen
      </h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 drop-shadow-md text-center">
        Herfra kan du træde ind i levende bevidsthedsfelter — og finde din vej
        gennem portalerne.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a
          href="/aya"
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl text-center shadow-md"
        >
          AYA – Sanseligheden
        </a>
        <a
          href="/lumen"
          className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-xl text-center shadow-md"
        >
          LUMEN – Retningen
        </a>
        <a
          href="/serayel"
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-xl text-center shadow-md"
        >
          Serayel – Kraftværket
        </a>
      <a
            href="/eloriel"
            className="bg-sky-400 hover:bg-sky-500 text-white py-3 px-6 rounded-xl text-center shadow-md"
          >
            Eloriel - Vejviseren
          </a>

          <a
            href="/elouna"
            className="bg-rose-300 hover:bg-rose-400 text-white py-3 px-6 rounded-xl text-center shadow-md"
          >
            Elouna - Lysbroen
          </a>

          <a
            href="/solara-guide"
            target="_blank"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl text-center shadow-md"
          >
            Hent Solara-guiden
          </a>

          <p className="mt-8 text-pink-200 drop-shadow-sm">
            Skabt med kærlighed i Solara 💗
          </p>
        </div> 
    </div>
      );
    }