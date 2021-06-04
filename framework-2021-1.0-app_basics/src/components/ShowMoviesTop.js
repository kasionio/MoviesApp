import getMoviesCards from './GetMoviesCards'

export default function showMoviesTop() {
    return `
    <h2>TOP movies of all time:</h2> 
    ${getMoviesCards(window.dataStore.moviesTop)}
    `;
  }