import React from 'react';
import Item from './item';
import Track from './track';
import { Button } from '@material-ui/core';

const ResultList = ({ result, sort, ascending, type, search }) => {

    if (result.length === 0) {
        return (
            <h3>No Results for {search}</h3>
        )
    }
    
    const trackOrItem = () => {
        if (type === 'Tracks') {
            return (
                <div className='track-list'>
                    {result.map(res => {
                        return (
                            <Track item={res} key={res.id} />
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className='artist-images'>
                    {result.map(res => (
                        <div key={res.id}>
                            <Item item={res} />
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <section>
            <h2>Result for: {search}</h2>
            <div className='type'>
                <h3>{type}</h3>
                {
                    (type === 'Artists' || type === 'Tracks') &&
                    <button
                        type="submit"
                        onClick={sort}
                        className="sort-button"
                    >
                        Sort By Populartiy: {ascending ? 'Ascending' : 'Descending'}
                    </button>
                }
            </div>
            {trackOrItem()}
        </section>
    )
}

export default ResultList;