export default function showfilterByGenre() {
    return `
    <label for='genres'>
      Filter by genre:
    </label>
    <select 
      name='genres' 
      onchange="filter(this.value);"
    >
    <option value=''>
      --Please choose a genre--
    </option>
      ${window.dataStore.listOfGenres.map(
        genre => `
        <option 
          value='${genre.id}' 
        > ${genre.name} 
        </option>
      `,
      )} 
    </select>
      `;
  }
  