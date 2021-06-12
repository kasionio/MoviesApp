import React, { useState, useEffect } from 'react';
import { loadMoviesByYear } from '../data/movieDbAPI';
import MoviesByYear from './MoviesByYear';
import styles from '../style.css';

export default function SearchByYear({ currentYear, onBlur }) {
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (currentYear) {
      setIsLoading(true);
      loadMoviesByYear(currentYear)
        .then(data => {
          const { message, code } = data;

          if (code !== '200' && message) throw Error(message);

          setError(error);
          setMovieData(data.results);
        })
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, [currentYear]);

  return (
    <>
      <div>
        <h2 className={styles.header}>Movies by the year of release :</h2>
        <input
          type="text"
          defaultValue={currentYear}
          onBlur={event => onBlur(event.target.value)}
        />
        <MoviesByYear
          movies={movieData}
          error={error}
          isLoading={isLoading}
          currentYear={currentYear}
        />
      </div>
    </>
  );
}
