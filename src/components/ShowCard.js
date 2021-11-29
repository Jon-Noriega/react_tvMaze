import React from 'react';

const ShowCard = ({show}) => {
    const {name,image,summary,rating} = show;

    return (
        <div>
            <header className='show-card-title'>{name}</header>
            <img src={image.medium} alt={summary}/>
            <h2 className='show-card-rating'>{rating.average}</h2>
        </div>
    )
}

export default ShowCard;