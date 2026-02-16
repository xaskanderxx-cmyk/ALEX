
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCourseAdvice = async (userInterest: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `أنا طالب مهتم بـ: ${userInterest}. بصفتك مستشاراً تعليمياً خبيراً في أكاديمية إسلام اسكندر، قدم لي نصيحة قصيرة ومركزة حول المسار التعليمي المناسب لي من مجالات البرمجة أو الأوفيس أو التصميم. ابدأ ردك بترحيب حار باللغة العربية.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، حدث خطأ أثناء الاتصال بالمستشار الذكي. حاول مرة أخرى قريباً.";
  }
};
