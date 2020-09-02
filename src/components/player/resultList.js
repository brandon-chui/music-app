import React from 'react';
import Artist from './artist';

const ResultList = ({ result }) => {
    return (
        <div className='artist-images'>
            {result.map(res => (
                <div key={res.id}>
                    <Artist artist={res} />
                </div>
            ))}
        </div>
    )
}

export default ResultList;