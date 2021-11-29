import React from 'react';

const SearchBar = ({searchTerm,handleSearchTerm}) => {

    return (
        <div className='search-bar'>
            Search: 
            <input 
                placeholder='Show Title'
                type='text'
                value={searchTerm}
                onChange={handleSearchTerm}
                style={{marginLeft: 10}}
            />
        </div>
    )
}

export default SearchBar;