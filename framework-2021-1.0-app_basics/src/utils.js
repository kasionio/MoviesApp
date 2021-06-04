export const COMEDY_GENRE_ID = 35;
export const ACTION_GENRE_ID = 28;
export const DOCUMENTARY_GENRE_ID = 99;

export default function getmoviePoster(poster_path) {
  //TODO: extract UI to component
  if (poster_path) {
    return `<img src='http://image.tmdb.org/t/p/w500/${poster_path}'></img>`;
  } else {
    return 'without poster';
  }
}


