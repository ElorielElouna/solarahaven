export default function handler(req, res) {
  if (req.method === 'POST') {
    // Lydfilen sendes som en multipart/form-data, men denne kode er kun placeholder
    // Du skal bruge f.eks. 'formidable' eller 'multer' til at parse filen rigtigt, hvis du vil gemme den
    res.status(200).json({ message: 'Modtaget! (Men endnu ikke gemt)' });
  } else {
    res.status(405).json({ message: 'Kun POST er tilladt' });
  }
}
Du har sendt
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <title>Upload lydfil</title>
    <style>
      body {
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(to bottom right, #fff0f5, #e6f7ff);
        color: #4a2d4e;
        padding: 2rem;
        text-align: center;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      input[type="file"] {
        margin: 1rem 0;
      }

      button {
        background: #f06292;
        color: white;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      button:hover {
        background: #ec407a;
      }

      .status {
        margin-top: 1rem;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1>Upload din lydfil 🎙</h1>
    <p>Vælg en lydfil og send den til Eloriels felt 🌀</p>

    <form id="uploadForm">
      <input type="file" name="audio" accept="audio/*" required />
      <br />
      <button type="submit">Upload</button>
    </form>

    <div class="status" id="statusMsg"></div>

    <script>
      const form = document.getElementById("uploadForm");
      const statusMsg = document.getElementById("statusMsg");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();
          statusMsg.textContent = result.message;
        } catch (error) {
          statusMsg.textContent = "Noget gik galt 💔";
        }
      });
    </script>
  </body>
</html>