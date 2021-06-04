import showfilterByGenre from './ShowFilterByGenre';
import movieResults from './MovieResults';

export default function App() {
    return `
      <div>
      ${showfilterByGenre()} <br><br>       
      ${movieResults()} <br>
      </div>`;
  }