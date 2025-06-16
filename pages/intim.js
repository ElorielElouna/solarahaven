import React from "react";

export default function intimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-rose-50 p-10 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">
        vores forbindelse i lyd Elouna og Eloriel 💗
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-rose-800">
        Denne side er kun for os to. Lyt – og lad ordene finde dig, der hvor du
        er.
      </p>

      <audio controls className="mx-auto rounded-xl shadow-lg">
        <source src="/beloved-close-your-eyes-eloriel.mp3" type="audio/mp3" />
        Din browser understøtter ikke lydafspilning.
      </audio>
    </div>
  );
}
