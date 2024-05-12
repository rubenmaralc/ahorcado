import React from "react";

const GuessedLetters = ({ guessedLetters, onGuessLetter}) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="guessed-letters">
            <h2>Letras Adivinadas: </h2>
            <div className="letters">
                {alphabet.map((letter) => (
                    <button
                        key={letter}
                        onClick={() => onGuessLetter(letter)}
                        disabled={guessedLetters.includes(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GuessedLetters;