/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import styles from '../style.css';
import getMoviePoster from '../utils';

export default function GetMoviesCards(movies) {
  return (
    <>
      <div class={styles['moviesTop']}>
        {movies.map(({ title, poster_path }) => (
          <p>
            {title}
            <img src={getMoviePoster(poster_path).src}></img>
          </p>
        ))}
      </div>
    </>
  );
}
