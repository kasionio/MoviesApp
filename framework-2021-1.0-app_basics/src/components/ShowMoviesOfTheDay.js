import getMoviesCards from './GetMoviesCards'
import { COMEDY_GENRE_ID, ACTION_GENRE_ID, DOCUMENTARY_GENRE_ID }from '../utils'

function showMoviesOfTheDay() {
    return `
    <div>
      <h2>Movies of the day:</h2>
      <h4> &#128516; Comedy:</h4> 
        ${getMoviesCards(
          window.dataStore.moviesOfTheDay.filter(movie => 
            movie.genre_ids.includes(COMEDY_GENRE_ID)),
        )}
          <br>
      <h4> &#128526; Action:</h4> 
        ${getMoviesCards(
          window.dataStore.moviesOfTheDay.filter(movie => 
            movie.genre_ids.includes(ACTION_GENRE_ID)),
        )}
          <br>
      <h4> &#129488; Documentary:</h4> 
        ${getMoviesCards(
          window.dataStore.moviesOfTheDay.filter(movie =>
            movie.genre_ids.includes(DOCUMENTARY_GENRE_ID),
          ),
        )}
    </div>
          `;
  }

  export default showMoviesOfTheDay;