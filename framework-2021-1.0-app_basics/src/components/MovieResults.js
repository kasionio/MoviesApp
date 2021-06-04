import showMoviesByGenre from './ShowMoviesByGenre';
import showMoviesOfTheDay from './ShowMoviesOfTheDay';
import showMoviesTop from './ShowMoviesTop'

export default function movieResults() {
    const { currentGenreId, isDataLoading, error } = window.dataStore;
    let content = '';
    if (!currentGenreId) {
      content = 'Choose genre from the list';
    } else {
      if (isDataLoading) {
        content = 'Loading...';
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