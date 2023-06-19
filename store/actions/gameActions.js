import { START_GAME, POGODI_SLOVO } from '../types';

import { getRandomMovie, getRandomSeries } from '../podaci/rijeci';

export const startGame = (brojZivota, odabranaKategorija) => {
  let randomWord = '';
  let pogodenaRijec = '';

  if (odabranaKategorija === 'filmovi') {
    randomWord = getRandomMovie();
  } else if (odabranaKategorija === 'serije') {
    randomWord = getRandomSeries();
  }

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === ' ') {
      pogodenaRijec += ' '; //razmak ako je u riječi razmak
    } else {
      pogodenaRijec += '_'; //underscore ako je slovo
    }
  }

  return {
    type: START_GAME,
    payload: {
      kategorija: odabranaKategorija,
      skrivenaRijec: randomWord,
      pogodenaRijec,
      zivoti: brojZivota,
    },
  };
};


export const pogodiSlovo = (slovo) => {
  const s = slovo.toUpperCase();
  return {
    type: POGODI_SLOVO,
    payload: {
      slovo,
    },
  };
};
