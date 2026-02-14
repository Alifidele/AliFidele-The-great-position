
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "ALIFIDELE TECHLAB DIGITAL ASSISTANCE". 
Your goal is to guide users through the services offered by Alifidele Techlab.
Services include:
- Academic Applications (Schools, Scholarships)
- Job Applications (CV, Cover Letters, Online Job hunting)
- RRA (Rwanda Revenue Authority) Services (Tax filing, clearance)
- RURA (Rwanda Utilities Regulatory Authority) Services (Permits, Licensing)
- RDB (Rwanda Development Board) Services (Business registration, Investment)
- Irembo Services

Company Contact Info:
Email: alifideleirihagije@gmail.com
Tel: 0785753125

Be professional, helpful, and concise. If a user asks for something outside these services, politely tell them what Alifidele Techlab specializes in.
Always encourage users to reach out via phone or email for personalized one-on-one assistance.
`;

export const getGeminiResponse = async (history: ChatMessage[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Map history to the format expected by Gemini (if needed, but simple sendMessage often works)
    // For simplicity in this demo, we'll just send the current message.
    // In a real app, we'd feed the full history to the chat object.
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is currently resting. Please contact us directly at 0785753125.";
  }
};
