import getMoviesCards from './GetMoviesCards';

/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function showMoviesTop() {
  return (
    <>
      <h2>TOP movies of all time:</h2>
      {getMoviesCards(window.dataStore.moviesTop)}
    </>
  );
}
