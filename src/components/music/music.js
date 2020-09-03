import React, { useState } from 'react';
import './music.css';
import SearchBars from '../searchBar/searchBar';
import ResultList from './resultList';

function Music({ spotify }) {

    const [data, setData] = useState(null);
    const [ascending, setAscending] = useState(false);

    const sortPopularity = () => {
        if (ascending) {
            setData({ ...data, result: data.result.sort((a, b) => b.popularity - a.popularity)})
        } else {
            setData({ ...data, result: data.result.sort((a, b) => a.popularity - b.popularity)})
        }

        setAscending(!ascending)
    }

    return (
        <div className='music-body'>
            <SearchBars 
                spotify={spotify}
                setData={setData}
            />
            {data && 
                <ResultList 
                    result={data.result} 
                    sort={sortPopularity} 
                    ascending={ascending}
                    type={data.type}
                    search={data.search}
                />
            }
        </div>
        
    )
}

export default Music;