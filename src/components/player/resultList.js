import React from 'react';
import Item from './item';
import Track from './track';
import { Button } from '@material-ui/core';

const ResultList = ({ result, sort, ascending, type }) => {
    
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

    console.log(result);

    return (
        <section>
            <h2>Result List</h2>
            <div>
                <h4>{type}</h4>
                <Button
                    type="submit"
                    onClick={sort}
                >
                    Sort By Populartiy: {ascending ? 'Ascending' : 'Descending'}
                </Button>
            </div>
            {trackOrItem()}
        </section>
    )
}

export default ResultList;