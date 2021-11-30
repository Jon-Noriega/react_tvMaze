import React from 'react';

const SearchBar = ({searchTerm,setSearchTerm}) => {

    return (
        <div className='search-bar'>
            <label>Search: </label>
            <input 
                placeholder='Show Title'
                type='text'
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                style={{marginLeft: 10}}
            />
        </div>
    )
}

export default SearchBar;