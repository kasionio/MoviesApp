import React from 'react';
import styles from '../style.css';
import getMoviePoster from '../utils';

export default function GetMoviesCards({ movies }) {
  if (movies) {
    return (
      <>
        <div className={styles.moviesTop}>
          {movies.map(({ title, poster_path, vote_average }) => (
            <p key={title}>
              <img src={getMoviePoster(poster_path).src} alt={title} />
              <span className={styles.vote}>{vote_average}</span>
              {title}
            </p>
          ))}
        </div>
      </>
    );
  } else {
    return <p>No such movies</p>;
  }
}
