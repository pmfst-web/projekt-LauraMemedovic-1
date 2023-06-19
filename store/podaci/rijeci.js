export const movieList = [
  'Avatar',
  'Superbad',
  'The Prestige',
  'Dark Knight',
  'Avengers',
  'Inception',
  'Pulp Fiction',
  'The Shawshank Redemption',
  'Fight Club',
  'The Godfather',
  'Interstellar',
  'The Matrix',
  'Forrest Gump',
  'Goodfellas',
  'The Lion King',
  'Titanic',
  'Gladiator',
  'The Avengers',
  'Jurassic Park',
  'Star Wars',
];

export const seriesList = [
  'Breaking Bad',
  'Shameless',
  'The Sopranos',
  'Fleabag',
  'Better Call Saul',
  'Game of Thrones',
  'Friends',
  'Stranger Things',
  'The Office',
  'The Crown',
  'Black Mirror',
  'Westworld',
  'Narcos',
  'The Big Bang Theory',
  'Mindhunter',
  'The Witcher',
  'Money Heist',
  'Peaky Blinders',
  'The Mandalorian',
  'The Walking Dead',
];


export const getRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * movieList.length);
  return movieList[randomIndex];
};

export const getRandomSeries = () => {
  const randomIndex = Math.floor(Math.random() * seriesList.length);
  return seriesList[randomIndex];
};
