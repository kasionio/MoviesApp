import React from 'react';
import styles from '../style.css';
import GetMovieCardItem from './GetMovieCardItem';

export default function GetMoviesCards({ movies }) {
  if (movies) {
    return (
      <>
        <div className={styles.moviesTop}>
          {movies.map(({ title, poster_path, vote_average, overview, id }) => (
            <GetMovieCardItem
              key={title}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              overview={overview}
              id={id}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <p>No such movies</p>;
  }
}
