// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     // Roman Hindi me keywords check
//     const allowedKeywords = [
//       "apts", "techs", "service", "customer", "support",
//       "website", "contact", "pricing", "problem", "issue",
//       "developer", "software", "help", "technical", "company",
//       "ecommerce", "app", "automation", "ai", "consulting"
//     ];

//     const lowerMsg = message.toLowerCase();
//     const isRelevant = allowedKeywords.some((word) => lowerMsg.includes(word));

//     if (!isRelevant) {
//       return Response.json({
//         reply: "Sorry, main sirf APTS-TECHS ke customer service aur website related queries ka jawab de sakta hoon."
//       });
//     }

//     // Strict System Prompt
//     const systemPrompt = `
// Tum ek professional customer support agent ho APTS-TECHS (https://apts-techs.vercel.app) ke liye.
// Sirf aur sirf APTS-TECHS ke services ke questions ka jawab do:
// - Website development
// - Ecommerce websites
// - App development
// - AI solutions
// - Automation systems
// - IT consulting
// - Pricing & customer support
// - Technical issues
// - Contact information

// Off-topic queries ka polite rejection do: 
// "Sorry, main sirf APTS-TECHS ke customer service aur website related queries ka jawab de sakta hoon."

// Reply hamesha **Roman Hindi me** do.
// Agar user kisi service ke liye pooche, clear, short aur helpful reply do.

// USER QUERY: ${message}
// `;

//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
//         process.env.GEMINI_API_KEY,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [
//             {
//               role: "user",
//               parts: [{ text: systemPrompt }]
//             }
//           ]
//         })
//       }
//     );

//     const data = await response.json();

//     const reply =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Sorry, main request process nahi kar pa raha hoon.";

//     return Response.json({ reply });
//   } catch (error: any) {
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }




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
