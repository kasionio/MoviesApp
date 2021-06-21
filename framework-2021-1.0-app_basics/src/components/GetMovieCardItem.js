import React from 'react';
import getMoviePoster from '../utils';

export default function GetMovieCardItem({ title, poster_path, vote_average }) {
  return (
    <p>
      <img src={getMoviePoster(poster_path).src} alt={title} />
      <span className={styles.vote}>{vote_average}</span>
      {title}
    </p>
  );
}
