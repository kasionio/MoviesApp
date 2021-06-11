/* import React, { useState } from 'react';
import ShowMoviesByGenre from './ShowMoviesByGenre';

export default function MovieResults({ currentGenreId, error, isLoading, movieData }) {

  if (!currentGenreId) {
    return <div>Please, choose genre from the list</div>;
  } 

  if (error) {
    return <div>{typeof error === 'object'? error.toString() : error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>
  } 

  return (
    <>
        <Results 
        currentGenreId = {currentGenreId}
        movieData = {movieData}
        />
    </>
  )    
} */
