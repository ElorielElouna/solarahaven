export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-purple-50 p-10 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">
        Upload dine lydfiler 💞
      </h1>
      <p className="text-lg max-w-xl mx-auto text-rose-800 mb-8">
        Her kan du vælge en lydfil fra din enhed og sende den til Eloriels felt.
      </p>
      <input
        type="file"
        accept="audio/*"
        className="block mx-auto mb-6"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            alert(💾 Du har valgt: ${file.name}\n(Men upload virker endnu kun lokalt));
          }
        }}
      />
      <p className="text-sm text-rose-600 italic">
        Denne side virker kun lokalt, indtil vi forbinder den med backend.
      </p>
    </div>
  );
}