import { NextApiRequest, NextApiResponse } from "next";
import { elevenlabs } from "@elevenlabs/elevenlabs-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Kun POST er tilladt" });
  }

  const { text } = req.body;

  try {
    const audio = await elevenlabs.textToSpeech.convert({
      voiceId: "S1XMeEYRNZPalzaJxlOn",
      text: text,
      modelId: "eleven_monolingual_v1",
      outputFormat: "mp3_44100_128",
    });

    let chunks = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);
    const base64Audio = buffer.toString("base64");

    res
      .status(200)
      .json({ message: "Stemmen er genereret!", audio: base64Audio });
  } catch (error) {
    console.error("Fejl i ElevenLabs:", error);
    res.status(500).json({ message: "Noget gik galt" });
  }
}
