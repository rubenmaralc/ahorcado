import React from "react";

function Words({ setWordToGuess}) {
    let words = [
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
    ]

    let randomIndex = Math.floor(Math.random() * words.length);
    let word = words[randomIndex];
    setWordToGuess(word);
    return null;
}

export default Words;