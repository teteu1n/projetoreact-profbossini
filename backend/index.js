require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

app.post('/gemini', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    if (!prompt) {
      return res.status(400).json({ erro: 'Prompt é obrigatório.' });
    }

    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.json({ resposta: text });
  } catch (error) {
    console.error('Erro ao gerar conteúdo com Gemini:', error);
    res.status(500).json({ erro: 'Erro interno ao gerar resposta com Gemini.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
