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
        pogodenaRijec: '_'.repeat(randomWord.length).toUpperCase(), //rijec koja se treba pogoditi prikazana crticama
        zivoti: action.payload.zivoti,
        gameStatus: 'traje',
        krivaSlova: [],
      };

    case POGODI_SLOVO:
      const { skrivenaRijec, pogodenaRijec, zivoti, krivaSlova } = state;
      const slovo = action.payload.slovo;
      const novaPogodena = [...pogodenaRijec];

      if (krivaSlova.includes(slovo)) {
        return state; //vrati stanje kakvo je, bez promjena
      }

      //provjera je li upisano slovo u skrivenoj rijeci
      if (skrivenaRijec.includes(slovo)) {
        //update rijeci koja se pogada sa upisanim slovom
        skrivenaRijec.split('').forEach((char, index) => {
          if (char === slovo) {
            novaPogodena[index] = char;
          }
        });

        //provjera je li igrac pobjedio
        if (!novaPogodena.includes('_')) {
          //sva slova su pogodena
          return {
            ...state,
            pogodenaRijec: novaPogodena.join(''),
            gameStatus: 'pobjeda',
          };
        }
      } else {
        //netocno slovo, gubi se zivot i u niz krivih slova se dodaje to slovo
        const noviZivoti = zivoti - 1;
        const novaKrivaSlova = [...krivaSlova, slovo];

        //provjera je li igrac izgubio
        if (noviZivoti === 0) {
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
