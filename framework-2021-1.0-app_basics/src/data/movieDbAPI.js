const dataStorage = {};

export function getMoviesByGenreUrl(currentGenreId) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenreId}&with_watch_monetization_types=flatrate`;
}

export function getListOfGenresUrl() {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`;
}

export function loadMoviesByGenre(currentGenreId) {
  const currentGenreData = dataStorage[currentGenreId];

  if (currentGenreData) return currentGenreData;

  const url = getMoviesByGenreUrl(currentGenreId);

  return fetch(url).then(response => {
    const result = response.json();
    dataStorage[currentGenreId] = result;
    return result;
  });
}

function getMoviesTopUrl() {
  return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`;
}

function getMoviesOfTheDayUrl() {
  return `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIEDB_API_KEY}`;
}

export function loadMoviesTop() {
  const currentMoviesTopData = dataStorage['moviesTop'];
  if (currentMoviesTopData) return currentMoviesTopData;
  const url = getMoviesTopUrl();

  return fetch(url).then(response => {
    const result = response.json();
    dataStorage['moviesTop'] = result;
    return result;
  });
}

export function loadMoviesOfTheDay() {
  const currentMoviesOfTheDay = dataStorage['MoviesOfTheDay'];
  if (currentMoviesOfTheDay) return currentMoviesOfTheDay;
  const url = getMoviesOfTheDayUrl();

  return fetch(url).then(response => {
    const result = response.json();
    dataStorage['MoviesOfTheDay'] = result;
    return result;
  });
}
