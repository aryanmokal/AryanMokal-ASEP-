
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationInput, LoanOffer } from "../types";

export const getLoanRecommendations = async (input: RecommendationInput): Promise<LoanOffer[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as an expert financial advisor. Based on the following user details:
  Loan Amount: ₹${input.amount}
  Purpose: ${input.purpose}
  City: ${input.city}
  Monthly Income: ₹${input.income}
  
  Provide a comparison of the 3 best loan offers from top Indian banks (like SBI, HDFC, ICICI, Axis).
  Ensure one option is highlighted as the 'Best Value'.
  
  Calculated EMI should be approximate based on current market rates (around 8% to 12% depending on the bank).`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            bank: { type: Type.STRING },
            interestRate: { type: Type.NUMBER },
            monthlyEMI: { type: Type.NUMBER },
            benefits: { type: Type.STRING },
            isBestValue: { type: Type.BOOLEAN }
          },
          required: ["bank", "interestRate", "monthlyEMI", "benefits", "isBestValue"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return [];
  }
};
