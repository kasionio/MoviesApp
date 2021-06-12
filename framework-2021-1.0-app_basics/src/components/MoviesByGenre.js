import React, { useState, useEffect } from 'react';
import { loadMoviesByGenre } from '../data/movieDbAPI';
import GetMoviesCards from './GetMoviesCards';

export default function MoviesByGenre({ currentGenreId }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (currentGenreId) {
      setIsLoading(true);
      loadMoviesByGenre(currentGenreId)
        .then(data => {
          const { message, code } = data;

          if (code !== '200' && message) throw Error(message);

          setError(error);
          setMovieData(data.results);
        })
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, [currentGenreId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{typeof error === 'object' ? error.toString() : error}</div>;
  }

  return (
    <>
      <GetMoviesCards movies={movieData} error={error} />
    </>
  );
}
