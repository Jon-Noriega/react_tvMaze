import React from 'react';
import ShowCard from './ShowCard';


const ShowsContainer = ({shows}) => {

    const displayShows = () => (
        shows.map((show) => (
            <ShowCard key={show.id} show={show}/>
        ))
    )

    return (
        <div className='shows-container'>
            {displayShows()}
        </div>
    )
}

export default ShowsContainer;