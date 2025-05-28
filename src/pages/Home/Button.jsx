import React from 'react';
import './button.css';

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
}