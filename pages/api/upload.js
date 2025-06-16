import multiparty from "multiparty";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const form = new multiparty.Form();

    form.parse(req, function (err, fields, files) {
      if (err) {
        return res.status(500).json({ message: "Noget gik galt under upload." });
      }

      const file = files.file?.[0];
      if (!file) {
        return res.status(400).json({ message: "Ingen fil fundet." });
      }

      const tempPath = file.path;
      const fileName = path.basename(file.originalFilename);
      const targetPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        fileName,
      );

      fs.copyFile(tempPath, targetPath, (err) => {
        if (err) {
          console.error("Fejl ved kopiering:", err);
          return res.status(500).json({ message:"Kunne ikke gemme filen." });
        }

        res.status(200).json({ message: "Fil uploadet og gemt!" });
      });
    });
  } else {
    res.status(405).json({ message: "Kun POST er tilladt" });
  }
}
