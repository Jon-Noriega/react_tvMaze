import React from 'react';

const SearchBar = ({searchTerm,setSearchTerm}) => {

    return (
        <div className='search-bar'>
            Search: 
            <input 
                placeholder='Show Title'
                type='text'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                style={{marginLeft: 10}}
            />
        </div>
    )
}

export default SearchBar;