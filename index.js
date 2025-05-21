require('dotenv').config()
const express = require ('express')
const { GoogleGenAI } = require ('@google/genai')
const app = express()
app.use(express.json())

, async (req, res) => {
  const ai = 
    new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = req.body.prompt
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  res.json({"resposta": response.text})
}

app.listen(3000, () => console.log("Hello World"))