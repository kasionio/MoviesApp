/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import ShowMoviesByGenre from './ShowMoviesByGenre';
import ShowMoviesOfTheDay from './ShowMoviesOfTheDay';
import ShowMoviesTop from './ShowMoviesTop';

export default function MovieResults() {
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
          <ShowMoviesByGenre />
          <ShowMoviesOfTheDay />
          <ShowMoviesTop />
        </>
      );
    }
  }
  return content ? <div>{content}</div> : '';
}
