import React, { useState } from 'react';
import './style.css';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import axios from 'axios';

function Home() {
  const [input, setInput] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleEnviar = async () => {
    if (!input.trim()) return;

    setCarregando(true);
    setResposta('');

    try {
      const res = await axios.post('http://localhost:3000/gemini', { prompt: input });
      setResposta(res.data.resposta);
    } catch (error) {
      console.error('Erro ao enviar prompt:', error);
      setResposta('Erro ao buscar recomendação. Tente novamente.');
    }

    setCarregando(false);
  };

  return (
    <div className="home-container">
      <header>Fome de novidade? Achamos o lugar certo pra você.</header>
      <Logo />
      <h1>O melhor restaurante para você:</h1>

      <input
        type="text"
        placeholder="Digite o tipo de restaurante ou cidade..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button onClick={handleEnviar}>Enviar</Button>

      {carregando && <p>Buscando recomendação...</p>}
      {resposta && (
        <div className="resposta">
          <h2>Recomendações:</h2>
         <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}

export default Home;

// Não está indicando restaurantes, mas se perguntar qual é o maior ele responde corretamente.