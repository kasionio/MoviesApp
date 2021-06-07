/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import ShowfilterByGenre from './ShowFilterByGenre';
import MovieResults from './MovieResults';

export default function App() {
  return (
    <>
      <ShowfilterByGenre />
      <MovieResults />
    </>
  );
}
