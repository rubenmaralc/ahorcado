// src/components/HangmanGame.js

import React, { useState, useEffect } from 'react';
import '../hangGame.css' // Importa tu archivo CSS personalizado

const words = [
    'Fuerza',
    'Masa',
    'Velocidad',
    'Aceleración',
    'Energía',
    'Trabajo',
    'Potencia',
    'Campo magnético',
    'Campo eléctrico',
    'Carga eléctrica',
    'Corriente eléctrica',
    'Resistencia',
    'Voltaje',
    'Frecuencia',
    'Longitud de onda',
    'Gravedad',
    'Inercia',
    'Ley de Newton',
    'Momentum',
    'Onda electromagnética'
];

const HangmanGame = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toLowerCase());
  }, []);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  const maskedWord = selectedWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

    return (
        <div className="hangman-game">
      <h1>Juego del Ahorcado</h1>
      <p>Palabra a adivinar: {maskedWord}</p>
      <p>Intentos restantes: {remainingAttempts}</p>
          <div className="keyboard">
            {Array.from({ length: 26 }, (_, index) => {
              const letter = String.fromCharCode(97 + index); // 'a' to 'z'
              const isGuessed = guessedLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={isGuessed || remainingAttempts === 0}
                  className={`futuristic-button ${isGuessed ? 'guessed' : ''}`} // Aplica la clase 'guessed' si la letra ya fue pulsada
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      );
};

export default HangmanGame;
