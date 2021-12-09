/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from 'react';

const GenreDropDown = ({shows,selectedGenre,setSelectedGenre}) => {

    // O(nm) time | O(nm) space - where n is the length of the input array & m is the length of the subarrays
    const genres = shows.map((show) => show.genres).flat();

    // O(nLogn) time | O(n) space - where n is the length of the input array
    const uniqGenres = [...new Set(genres)].sort();

    // O(n) time | O(n) space - where n is the length of the input array
    const displayOptions = () => (
        uniqGenres.map((genre) => (
            <option value={genre}>{genre}</option>
        ))
    )

    return (
        <div>
            <label>Genre: </label>
            <select
                onChange={(event) => setSelectedGenre(event.target.value)}
                value={selectedGenre}
                style={{marginLeft: 15, marginBottom: 10}}
            >
                <option value=''>Select</option>
                {displayOptions()}
            </select>
        </div>
    )
}

export default GenreDropDown;