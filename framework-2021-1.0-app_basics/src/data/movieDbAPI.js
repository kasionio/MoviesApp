export const dataStorage = {};

export function loadMoviesByGenre(currentGenreId) {
  const currentGenreData = dataStorage[currentGenreId];
  
  //if (currentGenreData) return currentGenreData;
  
  const url = getMoviesByGenreUrl(currentGenreId);
    
     return fetch(url).then( response => {
       const result = response.json();
       dataStorage[currentGenreId] = result;
       return result;
      })
    }

export default function getListOfGenres() {
  const listOfGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`;
  return fetch(listOfGenresUrl)
    .then(response => response.json())
    .then(data => data.genres);
}

export function getMoviesByGenreUrl(currentGenreId) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenreId}&with_watch_monetization_types=flatrate`;
}


 
 /* export function getMoviesTop() {
  const moviesTopUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`;
  return fetch(moviesTopUrl)
    .then(response => response.json())
    .then(data => data);
}

export function getMoviesOfTheDay() {
  const moviesOfTheDayUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIEDB_API_KEY}`;
  return fetch(moviesOfTheDayUrl)
    .then(response => response.json())
    .then(data => data);
} */ 