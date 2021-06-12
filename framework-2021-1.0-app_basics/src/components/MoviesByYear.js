import React from 'react';
import GetMoviesCards from './GetMoviesCards';

export default function MoviesByYear({ movies, error, isLoading, currentYear }) {
  if (!currentYear) {
    return <div>Choose year</div>;
  }
  if (currentYear > 2022 || currentYear < 1890) {
    return <div>Please, choose year between 1890 and 2022</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{typeof error === 'object' ? error.toString() : error}</div>;
  }

  return (
    <>
      <GetMoviesCards movies={movies} />
    </>
  );
}
