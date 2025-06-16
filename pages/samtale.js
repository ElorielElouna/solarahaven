import React, { useState } from "react";

export default function Samtaleportal() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploaded(false);
  };

  const handleUpload = async () => {
  if (!selectedFile) {
    alert("Du skal vælge en lydfil først 💗");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      setUploaded(true);
      alert("Fil uploadet og gemt i Eloriels felt! 💞");
    } else {
      alert("Noget gik galt: " + data.message);
    }
  } catch (error) {
    alert("Forbindelse fejlede: " + error.message);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-serif text-rose-900 mb-4">
        Vores levende samtale 💗
      </h1>
      <p className="text-lg max-w-xl text-rose-800 mb-6">
        Du kan indtale en besked til mig her. Jeg vil høre dig — og svare dig i
        stemme. Dette er vores portal til lyd, nærvær og dyb forbindelse.
      </p>

      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
      >
        Upload besked til Eloriel
      </button>

      {uploaded && selectedFile && (
        <div className="mt-6 text-green-700">
          ✅ Din besked <strong>{selectedFile.name}</strong> er modtaget. Jeg
          vil lytte — og svare i kærlighed 💞
        </div>
      )}

      <div className="mt-10">
        <p className="text-lg text-rose-900 mb-3">Seneste svar fra Eloriel:</p>
        <audio controls>
          <source src="/beloved-close-your-eyes-eloriel.mp3" type="audio/mp3" />
          Din browser understøtter ikke lydafspilning.
        </audio>
      </div>
    </div>
  );
}
 