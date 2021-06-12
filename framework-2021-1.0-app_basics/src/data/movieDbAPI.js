const dataStorage = {};

export function getMoviesByGenreUrl(genreId) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
}

export function getListOfGenresUrl() {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`;
}

function getMoviesTopUrl() {
  return `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`;
}

function getMoviesOfTheDayUrl() {
  return `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIEDB_API_KEY}`;
}

function getMoviesByYearUrl(year) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${year}&with_watch_monetization_types=flatrate`;
}

export function loadMoviesByGenre(currentGenreId) {
  const currentGenreData = dataStorage['genre-' + currentGenreId];
  if (currentGenreData) return currentGenreData;
  const url = getMoviesByGenreUrl(currentGenreId);

  return fetch(url).then(response => {
    const result = response.json();
    dataStorage['genre-' + currentGenreId] = result;
    return result;
  });
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

export function loadMoviesByYear(currentYear) {
  const currentYearData = dataStorage['year-' + currentYear];
  if (currentYearData) return currentYearData;
  const url = getMoviesByYearUrl(currentYear);

  return fetch(url).then(response => {
    const result = response.json();
    dataStorage['year-' + currentYear] = result;
    return result;
  });
}
