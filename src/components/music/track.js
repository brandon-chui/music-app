import React from 'react';

const nullImage = require('./noimage.png');

const Track = ({ item }) => {

    const artistsNames = item.artists.map(info => info.name).join(', ');
    const image = item.album.images[0] ? item.album.images[0].url : nullImage;

    return (
        <div className='track'>
            <img src={image} alt='album|song' className='track-image' />
            <div>
                <span className='track-name'>{item.name}</span>
                <span className='artist-name'>By: {artistsNames}</span>
            </div>
            <span className='popularity'>Popularity: {item.popularity}</span>
        </div>
    )
}

export default Track;