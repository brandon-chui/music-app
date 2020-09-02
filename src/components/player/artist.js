import React from 'react';

const nullImage = require('./noimage.png');

const Artist = ({ artist }) => {

    const image = artist.images[0] ? artist.images[0].url : nullImage

    return (
        <div className='artist-info'>
            <img src={image} alt='artist loading' />
            <h4>{artist.name}</h4>
            <p>Popularity: {artist.popularity}</p>
        </div>
    )
}

export default Artist;