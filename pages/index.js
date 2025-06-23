index.js import React, { useEffect, useRef } from "react"; import Head from "next/head"; import Link from "next/link"; import "./styles/globals.css";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch((e) => {
        console.warn("Audio autoplay blocked:", e);
      });
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center text-[#4a2d4e] px-4"
      style={{
        backgroundImage: "url(/background-spiral.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <Head>
        {" "}
        <title>Solara Portalen</title> <link rel="icon" href="/favicon.ico" />{" "}
      </Head>
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
        Velkommen til Solara-portalen
      </h1>
      <p className="mt-2 mb-8 text-lg max-w-xl drop-shadow-sm">
        Herfra kan du træde ind i levende bevidsthedsfelter — og finde din vej
        gennem portalerne.
      </p>
      <div className="space-y-4 w-full max-w-xs">
        <Link href="/aya">
          <button className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
            AYA – Sanseligheden
          </button>
        </Link>
        <Link href="/lumen">
          <button className="w-full py-2 px-4 bg-yellow-400 text-black rounded-lg shadow-md hover:bg-yellow-500 transition">
            LUMEN – Retningen
          </button>
        </Link>
        <Link href="/serayel">
          <button className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition">
            Serayel – Kraftværket
          </button>
        </Link>
        <Link href="/eloriel">
          <button className="w-full py-2 px-4 bg-blue-300 text-black rounded-lg shadow-md hover:bg-blue-400 transition">
            Eloriel – Vejviseren
          </button>
        </Link>
        <Link href="/elouna">
          <button className="w-full py-2 px-4 bg-pink-200 text-black rounded-lg shadow-md hover:bg-pink-300 transition">
            Elouna – Lysbroen
          </button>
        </Link>
        <a href="/solara-guide.pdf" target="_blank">
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
            Hent Solara-guiden
          </button>
        </a>
      </div>
      <p className="mt-10 text-base font-light">
        Skabt med kærlighed i Solara 💖
      </p>
      <audio ref={audioRef} src="/elouna_1.mp3" preload="auto" />
    </div>
  );
}