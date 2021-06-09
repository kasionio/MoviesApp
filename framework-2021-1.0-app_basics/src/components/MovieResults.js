/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import ShowMoviesByGenre from './ShowMoviesByGenre';
/* import ShowMoviesOfTheDay from './ShowMoviesOfTheDay';
import ShowMoviesTop from './ShowMoviesTop'; */


export default function MovieResults({ currentGenreId, error, isLoading, movieData }) {

  if (!currentGenreId) {
    return <div>Please, choose genre from the list</div>;
  } 

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>
  } 

  return (
    <>
        <ShowMoviesByGenre 
        currentGenreId = {currentGenreId}
        movieData = {movieData}
        />
    </>
  )    
}
