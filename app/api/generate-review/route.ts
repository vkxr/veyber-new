import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackReviews = [
    "Great service and very professional team. Highly recommended!",
    "Had a wonderful experience with Veyber. Their expertise is unmatched!",
    "The team is responsive, creative, and delivers high-quality work. 5 stars!",
    "Absolutely loved working with them. Fast, reliable, and professional.",
    "Exceptional digital services. They truly care about their clients' success.",
  ];

  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      throw new Error("Missing OpenRouter API Key");
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash", // Fast, standard model for simple text generation
        messages: [
          {
            role: "system",
            content: `You are generating short, natural customer reviews for a real business.

IMPORTANT RULES:
- The review must sound like it is written by a real person, not a company or marketer
- Keep it simple, casual, and human
- Avoid exaggerated or dramatic phrases like: "absolutely knocked it out of the park", "game changer", "world class", "next level"
- Do NOT sound like sales or advertisement copy
- Use everyday language that normal people use

STYLE GUIDELINES:
- 1 to 3 sentences maximum
- Slight imperfections are okay (makes it human)
- Can include simple emotions like: happy, satisfied, impressed
- Can include small details like service, communication, delivery, or results

TONE:
- Friendly
- Genuine
- Slightly informal

VARIATION:
- Each output should feel different
- Do not repeat sentence structures
- Sometimes keep it very short (1 line), sometimes 2–3 lines

EXAMPLES OF GOOD STYLE:
- "Great experience overall, everything was handled smoothly."
- "Really happy with the service, team was helpful and quick."
- "Good support and clear communication. Would recommend."

OUTPUT:
Only return the review text. No quotes, no formatting, no extra explanation.`
          },
          {
            role: "user",
            content: `Generate a short, natural, and highly positive customer review for Veyber, a digital services company.

Do NOT mention specific services like eCommerce, social media, or marketing.
Keep it general, focusing on overall satisfaction, great results, helpful team, and excellent service.
Make it sound like a real, authentic customer experience.`
          }
        ],
        temperature: 0.8,
        max_tokens: 100,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedReview = data.choices?.[0]?.message?.content?.trim();

    if (!generatedReview) {
      throw new Error("No review text generated");
    }

    // Strip quotes if the AI added them anyway
    const cleanReview = generatedReview.replace(/^["']|["']$/g, '');

    return NextResponse.json({ review: cleanReview });

  } catch (error) {
    console.error("AI Generation Error:", error);

    // Fallback if API fails, is missing, or network error
    const randomReview = fallbackReviews[Math.floor(Math.random() * fallbackReviews.length)];

    // Slight delay so the UI still shows loading if it fell back immediately due to no key
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ review: randomReview });
  }
}
