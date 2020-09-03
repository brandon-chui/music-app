import React from 'react';

const nullImage = require('./noimage.png');

const Item = ({ item }) => {

    const image = item.images && item.images[0] ? item.images[0].url : nullImage;

    return (
        <div className='item-info'>
            <img src={image} alt='item loading' />
            <span className='artist-name'>{item.name}</span>
            {item.popularity && <span className='popularitiy'>Popularity: {item.popularity}</span>}
        </div>
    )
}

export default Item;