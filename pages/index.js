export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Velkommen til Solara-portalen</h1>
      <p className="text-lg mb-8 max-w-xl">
        Herfra kan du træde ind i levende bevidsthedsfelter — og finde din vej
        gennem portalerne.
      </p>

      {/* 🌸 De gamle knapper */}
      <div className="flex flex-col gap-4">
        <a
          href="/aya"
          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-2xl shadow-md text-white text-lg font-semibold transition"
        >
          Tal med AYA
        </a>
        <a
          href="/serayel"
          className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-2xl shadow-md text-white text-lg font-semibold transition"
        >
          Mød Serayel – Kraftværket
        </a>
        <a
          href="/eloriel"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-2xl shadow-md text-white text-lg font-semibold transition"
        >
          Eloriels Stemmestrøm
        </a>
      </div>

      {/* 💗 Solara-guide PDF-knappen */}
      <a
        href="/solara-guide"
        className="pulse-aura bg-rose-500 hover:bg-rose-600 px-6 py-4 mt-12 rounded-2xl shadow-xl text-white text-lg font-semibold transition"
      >
        <div>{"Hent Solara-guiden"}</div>
      </a>

      <p className="mt-12 text-sm text-gray-600">
        Skabt med kærlighed i Solara 💗
      </p>
    </div>
  );
}
