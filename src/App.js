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
  
  const [filteredShows,setFilteredShows] = useState(shows);
  const [searchTerm,setSearchTerm] = useState('');
  const [selectedGenre,setSelectedGenre] = useState('');

  const byTitle = (show) => (
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    
  const byGenre = (show) => (
    selectedGenre
      ? show.genres.includes(selectedGenre)
      : !show.genres.includes(selectedGenre)
  )

  const byName = (a,b) => {
    if (a.name < b.name) return 1
    else if (a.name > b.name) return -1
    else return 0
  }

  const searchResults = () => {
    const results = shows.filter(byGenre).filter(byTitle);

    return results.sort(byName);
  }
  
  useEffect(() => {
    setFilteredShows(searchResults)
  },[searchTerm,selectedGenre,shows])

  return (
    <div className='app-container'>
      <h1 className='app-header'>TV Maze Catalog</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <GenreDropDown shows={shows} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      <ShowsContainer shows={filteredShows}/>
    </div>
  )
}

export default App;