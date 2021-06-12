import React, { useState } from 'react';
import FilterByGenre from './FilterByGenre';
import SearchByYear from './SearchByYear';
import MoviesTop from './MoviesTop';
import MoviesOfTheDay from './MoviesOfTheDay';
import styles from '../style.css';

export default function App() {
  const [currentGenreId, setcurrentGenreId] = useState('');
  const [listOfGenres, setListOfGenres] = useState([]);
  const [currentYear, setcurrentYear] = useState('');

  return (
    <>
      <h1 className={styles.main_header}>Movies App</h1>

      <FilterByGenre
        onChange={setcurrentGenreId}
        currentGenreId={currentGenreId}
        listOfGenres={listOfGenres}
        setListOfGenres={setListOfGenres}
      />

      <SearchByYear onInput={setcurrentYear} currentYear={currentYear} />

      <MoviesTop />

      <MoviesOfTheDay listOfGenres={listOfGenres} />
    </>
  );
}
