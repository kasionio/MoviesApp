import styles from './style.css';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = {
  currentGenreId: '',
  listOfGenres: '',
  moviesTop: '',
  moviesByGenre: {},
  moviesOfTheDay: {},
  isDataLoading: false,
  error: null,
};

function getListOfGenres() {
  const listOfGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`;
  return fetch(listOfGenresUrl)
    .then(response => response.json())
    .then(data => data);
}

function getMoviesTop() {
  const moviesTopUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`;
  return fetch(moviesTopUrl)
    .then(response => response.json())
    .then(data => data);
}

function getMoviesOfTheDay() {
  const moviesOfTheDayUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIEDB_API_KEY}`;
  return fetch(moviesOfTheDayUrl)
    .then(response => response.json())
    .then(data => data);
}

function showMoviesTop() {
  return `
  <h3>TOP movies of all time:</h3> 
  ${getMoviesCards(window.dataStore.moviesTop)}
  `;
}

function showMoviesByGenre() {
  let currentId = window.dataStore.currentGenreId;
  return `
  <h3>Movies by genre ${
    currentId ? window.dataStore.listOfGenres.genres.find(genre => genre.id == currentId).name : ''
  } :</h3>
  ${getMoviesCards(window.dataStore.moviesByGenre)}
  `;
}

function getMoviesCards(movies) {
  return `
    <div class='${styles['moviesTop']}'>
      ${movies.results
        .map(
          movie => `
        <p> ${movie.title}
        ${getmoviePoster(movie.poster_path)}</p>
        `,
        )
        .join('')}
      </div>
  `;
}

function renderApp() {
  document.getElementById('app-root').innerHTML = `${App()}`;
}

function App() {
  return `
    <div>
    ${showfilterByGenre()} <br><br>       
    ${movieResults()} <br>
    </div>`;
}

window.renderApp = renderApp;
window.filter = filter;
window.showMoviesByGenre = showMoviesByGenre;

filter();

function searchMoviesByGenre(currentGenreId) {
  const moviesFilteredByCurrentGenre = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenreId}&with_watch_monetization_types=flatrate`;
  return fetch(moviesFilteredByCurrentGenre)
    .then(response => response.json())
    .then(data => (window.dataStore.moviesByGenre = data));
}

function showfilterByGenre() {
  return `
  <label for='genres'>
    Filter by genre:
  </label>
  <select 
    name='genres' 
    onchange="filter(this.value);"
  >
  <option value=''>
    --Please choose a genre--
  </option>
    ${window.dataStore.listOfGenres.genres.map(
      genre => `
      <option 
        value='${genre.id}' 
      > ${genre.name} 
      </option>
    `,
    )} 
  </select>
    `;
}

function movieResults() {
  const { currentGenreId, isDataLoading, error } = window.dataStore;
  let content = '';
  if (!currentGenreId) {
    content = 'Choose genre from the list';
  } else {
    if (isDataLoading) {
      content = 'Data is loading...';
    }
    if (error !== null) {
      content = error;
    } else {
      content = `
    <div>${showMoviesByGenre()}</div>
    <div>${showMoviesOfTheDay()}</div>
    <div>${showMoviesTop()}</div>
    `;
    }
  }
  return content ? `<div>${content}</div>` : '';
}

function filter(currentGenreId) {
  window.dataStore.currentGenreId = currentGenreId;
  window.dataStore.isDataLoading = true;
  window.dataStore.error = null;
  Promise.all([getMoviesTop(), getListOfGenres(), getMoviesOfTheDay(), searchMoviesByGenre(currentGenreId)])
    .then(values => {
      window.dataStore = {
        ...window.dataStore,
        moviesTop: values[0],
        listOfGenres: values[1],
        moviesOfTheDay: values[2],
        moviesByGenre: values[3]
      };
      window.dataStore.isDataLoading = false;
    })
    .catch(error => {
      window.dataStore.isDataLoading = false;
      window.dataStore.error = error;
    })
    .finally(renderApp);
}

function getmoviePoster(poster_path) {
  if(poster_path) {
    return `<img src='http://image.tmdb.org/t/p/w500/${poster_path}'></img>`;
  }
  else {
    return 'without poster';
  }
}

function showMoviesOfTheDay() {
  const COMEDY_GENRE_ID = 35;
  const ACTION_GENRE_ID = 28;
  const DOCUMENTARY_GENRE_ID = 99;
  
  return `
  <div>
    <h3>Movies of the day:</h3>
      &#128516; Comedy: 
      ${window.dataStore.moviesOfTheDay.results.filter(movie => movie.genre_ids.includes(COMEDY_GENRE_ID))[0].title}
        <br>
      &#128526; Action: 
      ${window.dataStore.moviesOfTheDay.results.filter(movie => movie.genre_ids.includes(ACTION_GENRE_ID))[0].title}
        <br>
      &#129488; Documentary: 
      ${window.dataStore.moviesOfTheDay.results.filter(movie => movie.genre_ids.includes(DOCUMENTARY_GENRE_ID))[0].title}
  </div>
        `;
}
