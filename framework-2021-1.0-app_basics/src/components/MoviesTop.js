import React, { useState, useEffect } from 'react';
import GetMoviesCards from './GetMoviesCards';
import { loadMoviesTop } from '../data/movieDbAPI';
import styles from '../style.css';

export default function MoviesTop() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesTop, setMoviesTop] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    loadMoviesTop()
      .then(data => {
        const { message, code } = data;

        if (code !== '200' && message) throw Error(message);

        setError(error);
        setMoviesTop(data.results);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{typeof error === 'object' ? error.toString() : error}</div>;
  }

  return (
    <>
      <h2 className={styles.header}>TOP movies of all time:</h2>
      <GetMoviesCards movies={moviesTop} />
    </>
  );
}
