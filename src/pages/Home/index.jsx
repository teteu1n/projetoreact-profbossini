import React from 'react';
import './style.css';
import Button from './Button.jsx';
import Logo from './Logo.jsx';

function Home() {
  return (
    <div className="home-container">
      <Logo />
      <h1>O melhor restaurante para você:</h1>
      <Button>Enviar</Button>
    </div>
  );
}

export default Home;