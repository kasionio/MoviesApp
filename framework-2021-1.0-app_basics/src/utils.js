import { createElement } from './framework/element';
export const COMEDY_GENRE_ID = 35;
export const ACTION_GENRE_ID = 28;
export const DOCUMENTARY_GENRE_ID = 99;

export default function getMoviePoster(poster_path) {
  if (poster_path) {
    return {
      src: `http://image.tmdb.org/t/p/w500/${poster_path}`,
    };
  } else {
    return 'without poster';
  }
}
