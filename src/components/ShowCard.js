import React from 'react';

const ShowCard = ({show}) => {
    const {name,image,summary,rating} = show;

    return (
        <div>
            <h2>{name}</h2>
            <img src={image.medium} alt={summary}/>
            <h3>{rating.average}</h3>
        </div>
    )
}

export default ShowCard;