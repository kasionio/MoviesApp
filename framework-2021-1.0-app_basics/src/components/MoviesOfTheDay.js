import React, { useState, useEffect } from 'react';
import GetMoviesCards from './GetMoviesCards';
import { loadMoviesOfTheDay } from '../data/movieDbAPI';

export default function MoviesOfTheDay({ listOfGenres }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesOfTheDay, setMoviesOfTheDay] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    loadMoviesOfTheDay()
      .then(data => {
        const { message, code } = data;

        if (code !== '200' && message) throw Error(message);

        setError(null);
        setMoviesOfTheDay(data.results);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  let listOfMovies = listOfGenres.map(genre =>
    moviesOfTheDay.filter(movie => movie.genre_ids.includes(genre.id)).length !== 0 ? (
      <div key={genre.id}>
        <h4> {genre.name}</h4>
        <GetMoviesCards
          movies={moviesOfTheDay.filter(movie => movie.genre_ids.includes(genre.id))}
        />
      </div>
    ) : (
      ''
    ),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{typeof error === 'object' ? error.toString() : error}</div>;
  }

  return (
    <>
      <h2 className={styles.header}>Movies of the day by Genres:</h2>
      {listOfMovies}
    </>
  );
}
