import { START_GAME, POGODI_SLOVO } from '../types';

import {getRandomWord} from '../podaci/rijeci'

const pocetnoStanje = {
  skrivenaRijec: '',
  pogodenaRijec: '',
  zivoti: 10,
  krivaSlova: [],
};

const gameReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case START_GAME:
      const randomWord = getRandomWord();
      return {
        ...state,
        skrivenaRijec: randomWord.toUpperCase(),
        pogodenaRijec: '_'.repeat(randomWord.length).toUpperCase(), // Initialize guessedWord with underscores
        zivoti: 10,
        gameStatus: 'traje',
        krivaSlova: [],
      };

    case POGODI_SLOVO:
      const { skrivenaRijec, pogodenaRijec, zivoti, krivaSlova } = state;
      const slovo = action.payload.slovo;
      const novaPogodena = [...pogodenaRijec];

      if (krivaSlova.includes(slovo)) {
        return state; // Return the state as it is without making any changes
      }

      // Check if the guessed letter is in the hidden word
      if (skrivenaRijec.includes(slovo)) {
        // Update the guessed word with the correct letter
        skrivenaRijec.split('').forEach((char, index) => {
          if (char === slovo) {
            novaPogodena[index] = char;
          }
        });

        // Check if the player has won the game
        if (!novaPogodena.includes('_')) {
          // All letters have been guessed correctly
          return {
            ...state,
            pogodenaRijec: novaPogodena.join(''),
            gameStatus: 'pobjeda',
          };
        }
      } else {
        // Incorrect guess, decrement a life and store the wrong letter
        const noviZivoti = zivoti - 1;
        const novaKrivaSlova = [...krivaSlova, slovo];

        // Check if the player has lost the game
        if (noviZivoti === 0) {
          // No lives remaining
          return {
            ...state,
            pogodenaRijec: novaPogodena.join(''),
            zivoti: noviZivoti,
            gameStatus: 'gubitak',
            krivaSlova: novaKrivaSlova,
          };
        }

        return {
          ...state,
          pogodenaRijec: novaPogodena.join(''),
          zivoti: noviZivoti,
          krivaSlova: novaKrivaSlova,
        };
      }

      return {
        ...state,
        pogodenaRijec: novaPogodena.join(''),
      };
    default:
      return state;
  }
};

export default gameReducer;
