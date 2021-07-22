import React, { useState, useEffect } from 'react';
import styles from '../style.css';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getMovieDataUrl } from '../data/movieDbAPI';
import getMoviePoster from '../utils';

export default function MovieDescription() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch(getMovieDataUrl(id))
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
      });
  }, []);

  return (
    <>
      <h3>
        {movieData.title}
        <span> ({movieData.release_date ? movieData.release_date.slice(0, 4) : ''})</span>
      </h3>
      <p>
        <i> {movieData.tagline}</i>
      </p>
      <div className={styles.description}>
        <img
          src={getMoviePoster(movieData.poster_path).src}
          alt={movieData.title}
          className={styles.img}
        />

        <section className={styles.description_text}>
          {console.log(movieData)}
          <p>
            <b>Genres:</b>{' '}
            {movieData.genres ? movieData.genres.map(genre => genre.name).join(', ') : ''}
          </p>
          <p>
            <b>Budget:</b>{' '}
            {movieData.budget !== 0 && movieData.budget
              ? `${movieData.budget.toLocaleString('en')} $`
              : 'unknown'}
          </p>
          <p>
            <b>Popularity:</b> {Math.round(movieData.popularity)}
            <a
              href="https://developers.themoviedb.org/3/getting-started/popularity"
              target="blank"
              className={styles.popularity_description}
            >
              [?]
            </a>
          </p>
          <p>{movieData.overview}</p>
          <p>
            <a
              target="blank"
              href={`https://www.youtube.com/results?search_query=${movieData.title} movie trailer`}
            >
              Search movie trailer on Youtube
            </a>
          </p>
        </section>
      </div>
      <button onClick={history.goBack}>Go back</button>
    </>
  );
}
