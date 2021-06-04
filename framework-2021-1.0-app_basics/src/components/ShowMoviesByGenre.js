import getMoviesCards from './GetMoviesCards'

export default function showMoviesByGenre() {
    let currentId = window.dataStore.currentGenreId;
    return `
    <h2>Movies by genre ${
      currentId ? window.dataStore.listOfGenres
      .find(genre => genre.id == currentId).name : ''
    } :</h2>
    ${getMoviesCards(window.dataStore.moviesByGenre)}
    `;
  }