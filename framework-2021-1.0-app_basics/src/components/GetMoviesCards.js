import styles from '../style.css';
import getmoviePoster from '../utils';

/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function getMoviesCards(movies) {
  return (
    <>
      <div class={styles['moviesTop']}>
        {movies.map(({ title, poster_path }) => (
          <p>
            {' '}
            {title}
            {getmoviePoster(poster_path)}
          </p>
        ))}
      </div>
    </>
  );
}
