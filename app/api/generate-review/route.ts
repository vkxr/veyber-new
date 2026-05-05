import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { businessName, businessType, tone, customPrompt } = await req.json();

    const systemPrompt = `You are a helpful assistant that generates a short, natural customer review for a business named ${businessName} in the ${businessType} category. Keep it human, simple, and not overly promotional. Max 3 sentences.`;

    const userPrompt = customPrompt ? `Additional instructions: ${customPrompt}\nTone: ${tone || 'Casual'}` : `Tone: ${tone || 'Casual'}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://veyber.com",
        "X-Title": "Veyber Review System"
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        max_tokens: 150,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await response.json();
    if (!response.ok) {
        console.error("OpenRouter API Error Details:", data);
        throw new Error(data.error?.message || "OpenRouter error");
    }

    const text = data.choices[0].message.content.trim();
    return NextResponse.json({ success: true, text });
  } catch (error: any) {
    console.error("Internal API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
