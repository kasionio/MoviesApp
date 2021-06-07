/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import GetMoviesCards from './GetMoviesCards';

export default function ShowMoviesTop() {
  return (
    <>
      <h2>TOP movies of all time:</h2>
      {GetMoviesCards(window.dataStore.moviesTop)}
    </>
  );
}
