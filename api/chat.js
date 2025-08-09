import OpenAI from "openai";

export default async function handler(req, res) {
  // Initialize OpenAI (uses environment variable)
  const openai = new OpenAI(process.env.OPENAI_KEY);
  
  // Get user question from frontend request
  const { question } = req.body;

  // Call OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });

  // Send response back to frontend
  res.json({ reply: completion.choices[0].message.content });
}