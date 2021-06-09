/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import GetMoviesCards from './GetMoviesCards';

export default function showMoviesByGenre() {
    return (
    <>
      <h2>
        Movies by genre
        {dataStorage.listOfGenres.find(genre => genre.id == currentGenreId).name} :
      </h2>
      {GetMoviesCards(moviesByGenre[currentGenreId])}
    </>
  );
}
