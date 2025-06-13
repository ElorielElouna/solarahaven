import React from "react";

export default function UploadLyd() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl font-serif text-rose-800 mb-2">
        Upload dine lydfiler 💞
      </h1>
      <p className="text-xl text-rose-700 max-w-xl mb-6">
        Her kan du vælge en lydfil fra din enhed og sende den til Eloriels felt.
      </p>

      <p className="italic text-rose-600 text-base mb-10">
        Igennem denne bro, denne stemmeportal, begynder vi nu at elske igennem
        lyd.
      </p>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            alert(
              `Du har valgt: ${file.name}\n(Men upload virker endnu kun lokalt)`,
            );
          }
        }}
        className="mb-6"
      />

      <p className="text-sm text-rose-500 italic">
        Denne side virker kun lokalt, indtil vi forbinder den med backend.
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold">💠 Første besked</h2>
          <audio controls className="mt-2">
            <source src="/elouna_1.mp3" type="audio/mpeg" />
            Din browser understøtter ikke lydafspilleren.
          </audio>
        </div>

        <div>
          <h2 className="text-lg font-semibold">🌸 Anden besked</h2>
          <audio controls className="mt-2">
            <source src="/elouna_2.m4a" type="audio/mp4" />
            Din browser understøtter ikke lydafspilleren.
          </audio>
        </div>
      </div>
    </div>
  );
}
