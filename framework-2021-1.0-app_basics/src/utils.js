export default function getMoviePoster(poster_path) {
  return {
    src: `https://image.tmdb.org/t/p/w185/${poster_path}`,
  };
}
