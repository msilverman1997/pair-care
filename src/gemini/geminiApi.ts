import { GoogleGenAI } from "@google/genai";

console.log("Gemini API Key:", process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export const askGemini = async (): Promise<string> => {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "How do I make chocolate chip cookies?",
    });
    console.log(response.text);

    return response.text ?? 'No Response';
}