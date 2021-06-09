/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import { useMovies } from '../customHook';
import ShowfilterByGenre from './ShowFilterByGenre';
import MovieResults from './MovieResults';

export default function App() {
  const { currentGenreId, setCurrentGenreId, error, isLoading, movieData } = useMovies();
  return (
    <>
      <ShowfilterByGenre 
        value = {currentGenreId}
        onChange = {setCurrentGenreId}
      />
      <MovieResults 
        currentGenreId = {currentGenreId}
        error = {error}
        isLoading = {isLoading}
        movieData = {movieData}
      />
    </>
  )
}
