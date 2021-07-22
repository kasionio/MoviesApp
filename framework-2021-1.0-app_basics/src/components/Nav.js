import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.navBar}>
        <Link to="/FilterByGenre">
          <li>Filter by Genre</li>
        </Link>
        <Link to="/SearchByYear">
          <li>Search by year</li>
        </Link>
        <Link to="/MoviesTOP">
          <li>Movies TOP 100</li>
        </Link>
        <Link to="/MoviesOfTheDay">
          <li>Movies of the day</li>
        </Link>
      </ul>
    </nav>
  );
}
