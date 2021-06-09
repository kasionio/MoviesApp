/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
//import { getListOfGenres } from '../data/movieDbAPI';

export default function ShowfilterByGenre( {onChange} ) {
  const [listOfGenres, setListOfGenres] = useState({});
  setListOfGenres(genres);
  return (
    <>
      <div>
        <label For="genres">Search by genre:</label>
        <select name="genres" 
        onChange={e => onChange(e.target.value)}>
          <option value="">--Please choose a genre--</option>
          {listOfGenres.map(({ id, name }) => (
            <>
              <option value={id}>{name}</option>
            </>
          ))}
        </select>
      </div>
    </>
  );
}
