import showfilterByGenre from './ShowFilterByGenre';
import movieResults from './MovieResults';

/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function App() {
  return (
    <>
      <showfilterByGenre />
      <movieResults />
    </>
  );
}
