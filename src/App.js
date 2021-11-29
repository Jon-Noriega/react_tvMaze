import React, {useState,useEffect} from 'react';
import GenreDropDown from './components/GenreDropDown';
import SearchBar from './components/SearchBar';
import ShowsContainer from './components/ShowsContainer';

const baseURL = 'https://api.tvmaze.com/shows';

const App = () => {
  const [shows,setShows] = useState([]);
  
  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(shows => setShows(shows))
  },[]);
  
  const [searchTerm,setSearchTerm] = useState('');
  const [filteredShows,setFilteredShows] = useState(shows);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const [selectedGenre,setSelectedGenre] = useState('Select');

  const handleSelectedGenre = (event) => {
    setSelectedGenre(event.target.value)
  }
  
  const byName = (a,b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0
  }

  console.log('Selected Genre: ',selectedGenre);

  const filteredResults = () => {
    const searchedShows = shows.filter((show) => (
      (
        show.name.toLowerCase()
          .includes(searchTerm.toLowerCase())
        &&  
        show.genres
          .includes(selectedGenre)
      )
    ));

    return searchedShows.sort(byName);
  }
  
  useEffect(() => {
    setFilteredShows(filteredResults)
  },[searchTerm,selectedGenre,shows])
  
  console.log('Filtered Results: ', filteredResults());

  return (
    <div className='app-container'>
      <header className='app-header'>TV Maze Catalog</header>
      <SearchBar searchTerm={searchTerm} handleSearchTerm={handleSearchTerm}/>
      <GenreDropDown shows={shows} selectedGenre={selectedGenre} handleSelectedGenre={handleSelectedGenre}/>
      <ShowsContainer shows={filteredShows}/>
    </div>
  )
}

export default App;