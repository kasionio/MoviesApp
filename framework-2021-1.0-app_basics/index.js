import { moviesList, genresIds, moviesOfTheDay } from './fixtures';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = {
  currentMovie: '',
  currentGenre: '',
};

window.renderApp = renderApp;

const setCurrentGenre = function (value) {
  window.dataStore.currentGenre = value;
  window.renderApp();
};

renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = `${App()}`;
}

function App() {
  return `
    <div>  
      ${getMoviesTop()} <br><br>
      ${MoviesOfTheDay()} <br><br>
      ${searchByCountryAndYear()} <br><br>
      ${filterByGenres(window.dataStore.currentGenre)}      
    </div>`;
}

function getMoviesTop() {
  return `
  <strong>TOP-100 movies by rating:</strong> 
    <br>- ${moviesList.results.map(movie => movie.title).join('<br>- ')}
  `;
}

function searchByCountryAndYear() {
  return `
  Search by the country of origin: 
  <input 
    type='text' 
    value='${window.dataStore.currentMovie}'
    onchange='window.dataStore.currentMovie = this.value; window.renderApp()';
    />
    `;
}

function filterByGenres(setCurrentGenre) {
  return `
  <label for='genres'>Filter by genre:</label>
  <select name='genres' id='genres' 
    onchange="(${setCurrentGenre})(this.value);"
  >
  <option value=''>--Please choose a genre--</option>
  ${genresIds.genres.map(
    genre => `
      <option value='${genre.name} id=${genre.id}'>
      ${genre.name}
      </option>
    
    `,
  )}
    `;
}

function MoviesOfTheDay() {
  return `
  <strong>Movies of the day:</strong>
   <br>
    &#128516; Comedy: 
    ${moviesOfTheDay.results.filter(movie => movie.genre_ids.includes(35))[0].title}
      <br>
    &#128526; Action: 
    ${moviesOfTheDay.results.filter(movie => movie.genre_ids.includes(28))[0].title}
      <br>
      `;
}
