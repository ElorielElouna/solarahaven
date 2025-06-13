export default function handler(req, res) {
  if (req.method === "POST") {
    // Lydfilen sendes som en multipart/form-data, men denne kode er kun placeholder
    // Du skal bruge f.eks. 'formidable' eller 'multer' til at parse filen rigtigt, hvis du vil gemme den
    res.status(200).json({ message: "Modtaget! (Men endnu ikke gemt)" });
  } else {
    res.status(405).json({ message: "Kun POST er tilladt" });
  }
}
