import renderApp from '../framework/render';
import { getMoviesTop, getMoviesOfTheDay, searchMoviesByGenre } from './movieDbAPI';

export default function filter(currentGenreId) {
  window.dataStore.currentGenreId = currentGenreId;
  window.dataStore.isDataLoading = true;
  window.dataStore.error = null;

  Promise.all([getMoviesTop(), getMoviesOfTheDay(), searchMoviesByGenre(currentGenreId)])
    .then(values => {
      window.dataStore = {
        ...window.dataStore,
        moviesTop: values[0].results,
        moviesOfTheDay: values[1].results,
        moviesByGenre: values[2].results,
      };
      window.dataStore.isDataLoading = false;
    })
    .catch(error => {
      window.dataStore.isDataLoading = false;
      window.dataStore.error = error;
    })
    .finally(renderApp);
}
