/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from 'react';

const GenreDropDown = ({shows,selectedGenre,handleSelectedGenre}) => {

    // O(nm) time | O(nm) space, where n is the size of the array & m is the size of the subarrays
    const genres = shows.map((show) => show.genres).flat();

    const hash = {};

    // O(n) time | O(n) space
    genres.forEach((genre) => hash[genre] ? hash[genre]++ : hash[genre] = 1);

    // O(n) time | O(n) space
    const uniqGenres = Object.keys(hash).sort();

    // O(n) time | O(n) space
    const displayDropDown = () => (
        uniqGenres.map((genre) => (
            <option value={`${genre}`}>{genre}</option>
        ))
    )

    return (
        <div>
            Select:             
            <select
                value={selectedGenre}
                onChange={handleSelectedGenre}
                style={{marginLeft: 15, marginBottom: 10}}
            >
                {/* <option value=' '>Select</option> */}
                {displayDropDown()}
            </select>
        </div>
    )
}

export default GenreDropDown;