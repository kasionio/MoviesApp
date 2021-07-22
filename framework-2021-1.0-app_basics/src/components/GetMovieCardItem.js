import React from 'react';
import getMoviePoster from '../utils';
import { Link } from 'react-router-dom';
import styles from '../style.css';

export default function GetMovieCardItem({ title, poster_path, vote_average, id }) {
  return (
    <Link to={`MovieDescription/${id}`}>
      <div class={styles.movieCard}>
        <img src={getMoviePoster(poster_path).src} alt={title} />
        <span className={styles.vote}>{vote_average}</span>
        <span class={styles.name}>{title}</span>
      </div>
    </Link>
  );
}
