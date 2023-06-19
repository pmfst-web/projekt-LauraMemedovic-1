import { START_GAME, POGODI_SLOVO } from '../types';

import {getRandomWord} from '../podaci/rijeci'

export const startGame = (brojZivota) => {
  const randomWord = getRandomWord();
  return {
    type: START_GAME,
    payload: {
      skrivenaRijec: randomWord,
      pogodenaRijec: '_'.repeat(randomWord.length),
      zivoti: brojZivota,
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
