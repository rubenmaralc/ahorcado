import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return <div className="word-display">{displayWord}</div>;
};

export default WordDisplay;