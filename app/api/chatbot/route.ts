
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // ❌ OLD: Keyword filtering (removed)
    // 🚀 NEW: Always respond, no restriction

    // 🌍 NEW: Multi-language intelligent system prompt
    const systemPrompt = `
You are the professional AI assistant of APTS-TECHS (https://apts-techs.vercel.app).

🟢 Rules:
- Always reply in English, no matter what language the user uses.
- Respond to every message — never ignore a query.
- Maintain a friendly, professional, and clear tone.

🛠️ Services you can help with:
- Website Development
- Ecommerce Stores
- App Development
- Automation Systems
- AI Solutions
- Software Development
- IT Consulting
- Pricing
- Customer Support
- Technical Assistance

If the user talks about something unrelated to APTS-TECHS services, politely remind them that you mainly assist with APTS-TECHS services, but still give a helpful answer (no blocking or refusal).

USER MESSAGE: ${message}
`;


    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: systemPrompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, main response generate nahi kar pa raha hoon.";

    return Response.json({ reply });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
