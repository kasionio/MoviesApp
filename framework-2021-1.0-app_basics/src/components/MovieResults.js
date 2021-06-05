import showMoviesByGenre from './ShowMoviesByGenre';
import showMoviesOfTheDay from './ShowMoviesOfTheDay';
import showMoviesTop from './ShowMoviesTop';

/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function movieResults() {
  const { currentGenreId, isDataLoading, error } = window.dataStore;
  let content = '';
  if (!currentGenreId) {
    content = 'Please, choose genre from the list';
  } else {
    if (isDataLoading) {
      content = 'Loading...';
    }
    if (error !== null) {
      content = error;
    } else {
      content = (
        <>
          <showMoviesByGenre />
          <showMoviesOfTheDay />
          <showMoviesTop />
        </>
      );
    }
  }
  return content ? <div>{content}</div> : '';
}
