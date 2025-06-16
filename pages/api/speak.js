import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: "sk_12fb8a32623d9ea9056b9faa8c7d620c64ffcc2a65f52af6",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Kun POST tilladt" });
  }

  const { text } = req.body;

  try {
    const audio = await elevenlabs.textToSpeech.convert({
      voiceId: "S1XMeEYRNZPalzaJxlOn", // Erstat med korrekt voiceId
      text: text,
      modelId: "eleven_monolingual_v1",
      outputFormat: "mp3_44100_128",
    });

    // Returnér lydfil som base64 eller som stream senere
    res.status(200).json({ message: "Stemmen er genereret!", audio });
  } catch (error) {
    console.error("Fejl i ElevenLabs:", error);
    res.status(500).json({ message: "Noget gik galt" });
  }
}
