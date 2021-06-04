import styles from '../style.css';
import getmoviePoster from '../utils'

export default function getMoviesCards(movies) {
    return `
      <div class='${styles['moviesTop']}'>
        ${movies
          .map(
            movie => `
          <p> ${movie.title}
          ${getmoviePoster(movie.poster_path)}</p>
          `,
          )
          .join('')}
        </div>
    `;
  }
  