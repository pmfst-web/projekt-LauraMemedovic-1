const wordList = ['kuća', 'pas', 'mačka', 'drvo', 'stol', 'automobil', 'knjiga', 'sunce', 'more', 'trava', 'cvijet', 'brod', 'ptica', 'zrak', 'voda', 'planina', 'cesta', 'novac', 'šuma', 'oblak', 'torba', 'voće', 'povrće', 'riba', 'zvijezda', 'mjesečina', 'kamen', 'igračka', 'rođendan', 'obitelj', 'prijatelj', 'ljubav', 'sreća', 'smijeh', 'putovanje', 'glazba', 'ples', 'sport', 'život', 'hrana', 'posao', 'vrijeme', 'grad', 'boja', 'jezik', 'misao', 'životinja', 'biljka', 'zvuk', 'miris', 'okus'];

export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export default wordList;
