import React, { useEffect } from 'react';
import MoviesByGenre from './MoviesByGenre';
import styles from '../style.css';

export default function FilterByGenre({ onChange, currentGenreId, listOfGenres }) {

  return (
    <>
      <h2 className={styles.header}>
        Movies by genre{' '}
        {listOfGenres && currentGenreId
          ? listOfGenres.find(genre => genre.id == currentGenreId).name
          : ''}
        :
      </h2>

      <div>
        <label htmlFor="genres">Search by genre: </label>
        <select name="genres" onChange={event => onChange(event.target.value)}>
          <option value="">--Please choose a genre--</option>
          {listOfGenres
            ? listOfGenres.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))
            : []}
        </select>
      </div>

      <MoviesByGenre currentGenreId={currentGenreId} listOfGenres={listOfGenres} />
    </>
  );
}
