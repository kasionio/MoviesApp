/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import GetMoviesCards from './GetMoviesCards';

export default function showMoviesByGenre() {
  let currentGenreId = window.dataStore.currentGenreId;
  return (
    <>
      <h2>
        Movies by genre{' '}
        {window.dataStore.listOfGenres.find(genre => genre.id == currentGenreId).name} :
      </h2>
      {GetMoviesCards(window.dataStore.moviesByGenre)}
    </>
  );
}
