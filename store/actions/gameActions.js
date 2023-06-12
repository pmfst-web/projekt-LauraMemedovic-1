import { START_GAME, POGODI_SLOVO } from '../types';

import {getRandomWord} from '../podaci/rijeci'

export const startGame = () => {
  const randomWord = getRandomWord();
  return {
    type: START_GAME,
    payload: {
      skrivenaRijec: randomWord,
      pogodenaRijec: '_'.repeat(randomWord.length),
      zivoti: 10,
    },
  };
};

export const pogodiSlovo= slovo => {
  const s = slovo.toUpperCase();
  return {
    type: POGODI_SLOVO,
    payload: {
      slovo,
    },
  };
};
