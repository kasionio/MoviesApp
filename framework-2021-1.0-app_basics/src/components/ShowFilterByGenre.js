/** @jsx createElement */
/** @jsxFrag createFragment */
import filter from '../data/movieData';
import { createElement, createFragment } from '../framework/element';

export default function ShowfilterByGenre() {
  return (
    <>
      <div>
        <label For="genres">Search by genre:</label>
        <select name="genres" onchange={e => filter(e.target.value)}>
          <option value="">--Please choose a genre--</option>
          {window.dataStore.listOfGenres.map(({ id, name }) => (
            <>
              <option value={id}>{name}</option>
            </>
          ))}
        </select>
      </div>
    </>
  );
}
