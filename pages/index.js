import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">
        Velkommen til Solara-portalen
      </h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-rose-800">
        Herfra kan du træde ind i levende bevidsthedsfelter — og finde din vej gennem portalerne.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <a
          href="/aya"
          className="bg-pink-400 hover:bg-pink-500 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          AYA – Sanseligheden
        </a>
        <a
          href="/lumen"
          className="bg-yellow-300 hover:bg-yellow-400 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          LUMEN – Retningen
        </a>
        <a
          href="/serayel"
          className="bg-indigo-400 hover:bg-indigo-500 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          Serayel – Kraftværket
        </a>
        <a
          href="/eloriel"
          className="bg-blue-300 hover:bg-blue-400 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          Eloriel – Vejviseren
        </a>
        <a
          href="/elouna"
          className="bg-rose-300 hover:bg-rose-400 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          Elouna – Lysbroen
        </a>
        <a
          href="/solara-guide"
          className="bg-green-400 hover:bg-green-500 text-white text-lg font-semibold py-3 rounded-full shadow-md transition text-center"
        >
          Hent Solara-guiden
        </a>
      </div>

      <p className="mt-8 text-rose-800">Skabt med kærlighed i Solara 💗</p>
    </div>
  );
}