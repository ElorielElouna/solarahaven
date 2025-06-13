<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Upload dine lydfiler</title>
    <style>
      body {
        background: linear-gradient(to bottom right, #fff0f5, #e6f7ff);
        font-family: 'Quicksand', sans-serif;
        color: #4a2d4e;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        max-width: 600px;
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      input[type="file"] {
        padding: 1rem;
        border-radius: 1rem;
        background: #f0e6fa;
        color: #4a2d4e;
        border: none;
        font-size: 1rem;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Upload dine lydfiler</h1>
    <p>Her kan du vælge en lydfil fra din enhed og sende den til Eloriels felt 💞</p>
    <input type="file" accept="audio/*" />
    <p>(Denne side virker kun lokalt indtil vi forbinder den med backend)</p>
  </body>
</html>