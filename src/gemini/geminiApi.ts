import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';
import { get } from "http";

console.log("Gemini API Key:", process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export const askGemini = async (file?: File): Promise<string> => {

    if(file){
    const fileString: string = await toBase64(file);

    const contents = file ? [
        { text: "Summarize this document" },
        {
            inlineData: {
                mimeType: 'application/pdf',
                data:fileString,
            }
        }
    ] : [{text: 'What is a cool fact?'}];

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: contents,
    });
    console.log(response.text);

    return response.text ?? 'No Response';
}

    return 'No File Provided';
}

const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log('FileReader result:', reader.result);
        const result = reader.result as string;
        resolve(result.replace(/^[^,]+,/, '')); // Remove data URL prefix
      };
      reader.onerror = (error) => reject(error);
    });
  };