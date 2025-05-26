const axios = require('axios');

const baseURL = 'http://localhost:3000';

async function testarBackend() {
  try {
    // Testa o GET /
    const getResposta = await axios.get(`${baseURL}/`);
    console.log('GET /:', getResposta.data);

    // Testa o POST /gemini
    const postResposta = await axios.post(`${baseURL}/gemini`, {
      prompt: 'Me recomende 3 restaurantes de pizza em São Paulo com ambiente divertido.'
    });

    // Exibe a resposta formatada
    console.log('POST /gemini:\n');
    console.log(postResposta.data.resposta);

  } catch (error) {
    if (error.response) {
      console.error('Erro na resposta:', error.response.status, error.response.data);
    } else {
      console.error('Erro:', error.message);
    }
  }
}

testarBackend();
