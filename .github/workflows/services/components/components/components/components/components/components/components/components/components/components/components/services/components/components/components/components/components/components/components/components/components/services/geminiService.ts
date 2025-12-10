import { GoogleGenAI } from "@google/genai";

// In Vite, we use import.meta.env.VITE_API_KEY. 
// Note: For a public demo, the key might be visible. Ensure you have limits set in Google AI Studio.
const apiKey = import.meta.env.VITE_API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export type GenerationType = 'email' | 'social' | 'sms' | 'funnel';

const PROMPTS = {
  email: `Create a 5-email sequence for DMV Connection's DFY marketing service targeting local businesses and SMBs. Each email should be 150–250 words max. Include:
1. Intro Email / Awareness: Introduce DMV Connection, highlight DFY services, emphasize “no tools, no learning, no stress.”
2. Problem Email: Describe challenges of DIY marketing for local businesses (time, cost, expertise).
3. Solution Email: Show how DMV Connection handles videos, graphics, websites, campaigns, content, and automation. Include credibility/backstory.
4. Social Proof / Case Study Email: Include client testimonials, success stories, or results.
5. Urgency / CTA Email: Encourage booking a free strategy call, include limited availability or scarcity.
Tone: persuasive, approachable, professional, result-focused. Include strong CTA in each email.`,

  social: `Generate 3 variations of social media ad copy for DMV Connection, targeting local business owners and SMBs. Ads should highlight:
- Done-For-You marketing (videos, graphics, websites, funnels, campaigns)
- No tools, no learning, no stress for the business owner
- Quick results and professional quality
- CTA to book a free strategy call
Each ad: 50–100 words max, engaging, punchy, persuasive, suitable for Facebook, Instagram, or LinkedIn.`,

  sms: `Create 3 SMS/chat message variations for DMV Connection's DFY marketing services. Each message: 50–120 characters. Include:
- Fast, professional marketing delivered without effort
- Clear value: videos, graphics, websites, funnels, campaigns done-for-you
- CTA: Book a free strategy call
Messages should be concise, engaging, and attention-grabbing for business owners.`,

  funnel: `Write a thank-you / confirmation page copy for DMV Connection after a lead books a strategy call. Include:
- Friendly thank-you message
- Short summary of what happens next
- Encouragement to prepare business info for call
- Optional teaser: “See examples of what we can do for you”`
};

export const generateMarketingAsset = async (type: GenerationType): Promise<string> => {
  try {
    if (!apiKey) {
      return "API Key is missing. The AI generation demo requires a valid API Key.";
    }

    const prompt = PROMPTS[type];
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are the lead copywriter for DMV Connection, a high-end 'Done-For-You' marketing agency. Your tone is confident, empowering, professional, and results-driven. You address business owners directly. Do not use markdown symbols (like ** or #); use strictly plain text with clear paragraph breaks and capitalization for emphasis."
      }
    });

    return response.text || "No content generated. Please try again.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "An error occurred while generating the content. Please ensure your API key is valid and try again.";
  }
};
