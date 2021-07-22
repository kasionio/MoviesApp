import no_poster_holder from './assets/no_poster_holder.jpg';

export default function getMoviePoster(poster_path) {
  if (poster_path) {
    return {
      src: `https://image.tmdb.org/t/p/w185${poster_path}`,
    };
  } else {
    return {
      src: `${no_poster_holder}`,
    };
  }
}
