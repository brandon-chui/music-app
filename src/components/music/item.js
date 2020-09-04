import React from 'react';

const nullImage = require('./noimage.png');

const Item = ({ item }) => {

    const image = item.images && item.images[0] ? item.images[0].url : nullImage;

    return (
        <div className='item-info'>
            <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <img src={image} alt='item loading' />
            </a>
            <span className='artist-name'>{item.name}</span>
            {(item.popularity || item.popularity === 0) && <span className='popularitiy'>Popularity: {item.popularity}</span>}
            {(item.type === 'album') && 
                <p className='album-info'>
                    By: {item.artists.map(artist => artist.name).join(', ')} 
                    <br/> 
                    Released: {item.release_date.split('-')[0]}
                </p>}
        </div>
    )
}

export default Item;