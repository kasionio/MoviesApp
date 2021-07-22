import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import FilterByGenre from './FilterByGenre';
import SearchByYear from './SearchByYear';
import MoviesTop from './MoviesTop';
import MoviesOfTheDay from './MoviesOfTheDay';
import { getListOfGenresUrl } from '../data/movieDbAPI';
import styles from '../style.css';
import MovieDescription from './MovieDescription';

export default function App() {
  const [currentGenreId, setcurrentGenreId] = useState('');
  const [listOfGenres, setListOfGenres] = useState([]);
  const [currentYear, setcurrentYear] = useState('');

  useEffect(() => {
    fetch(getListOfGenresUrl())
      .then(response => response.json())
      .then(data => {
        setListOfGenres(data.genres);
      });
  }, []);

  return (
    <>
      <h1 className={styles.main_header}>Movies App</h1>
      <Router>
        <Nav />
        <Switch>
          <Route
            path="/filterByGenre"
            render={() => (
              <FilterByGenre
                onChange={setcurrentGenreId}
                currentGenreId={currentGenreId}
                listOfGenres={listOfGenres}
                setListOfGenres={setListOfGenres}
              />
            )}
          />
          <Route
            path="/SearchByYear"
            render={() => <SearchByYear onInput={setcurrentYear} currentYear={currentYear} />}
          />
          <Route path="/MoviesTop" component={MoviesTop} />
          <Route
            path="/MoviesOfTheDay"
            render={() => <MoviesOfTheDay listOfGenres={listOfGenres} />}
          />
          <Route path="/MovieDescription/:id" component={MovieDescription} />
        </Switch>
      </Router>
    </>
  );
}
