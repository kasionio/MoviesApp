import { useEffect, useState } from './framework';
import { loadMoviesByGenre } from './data/movieDbAPI';

export const useMovies = () => {
  const [currentGenreId, setCurrentGenreId] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState({});
  
  useEffect ( () => {
    if(currentGenreId) {
      loadMoviesByGenre(currentGenreId)
      .then(data => {
        const { message, code } = data;
        
        if (code !== '200' && message) throw Error(message);
        
        setError(null);
        setMovieData(data);
      })  
    .catch(setError)
    .finally( () => setIsLoading(false));
  }
}, [currentGenreId]); 
  
  return {
    currentGenreId,
    setCurrentGenreId,
    error,
    isLoading,
    movieData
  }
}