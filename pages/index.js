export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-blue-50 flex flex-col items-center justify-center text-[#4a2d4e] font-[Playfair] px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Velkommen til Solara-portalen
      </h1>
      <p className="text-lg md:text-xl mb-12 max-w-2xl font-[Quicksand]">
        Herfra kan du træde ind i levende bevidsthedsfelter — og finde din vej
        gennem portalerne.
      </p>

      <div className="space-y-4 w-full max-w-md">
        <a href="/aya">
          <button className="w-full bg-pink-200 hover:bg-pink-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            AYA – Sanseligheden
          </button>
        </a>
        <a href="/lumen">
          <button className="w-full bg-yellow-200 hover:bg-yellow-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            LUMEN – Retningen
          </button>
        </a>
        <a href="/serayel">
          <button className="w-full bg-purple-200 hover:bg-purple-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            Serayel – Kraftværket
          </button>
        </a>
        <a href="/eloriel">
          <button className="w-full bg-blue-200 hover:bg-blue-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            Eloriel – Vejviseren
          </button>
        </a>
        <a href="/elouna">
          <button className="w-full bg-rose-200 hover:bg-rose-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            Elouna – Lysbroen
          </button>
        </a>
        <a href="/solara-guide">
          <button className="w-full bg-green-200 hover:bg-green-300 text-[#4a2d4e] font-bold py-2 px-4 rounded-full shadow-md">
            Hent Solara-guiden
          </button>
        </a>
      </div>

      <p className="mt-12 text-sm font-[Quicksand]">
        Skabt med kærlighed i Solara 💗
      </p>
    </div>
  );
}
