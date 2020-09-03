import React, { useState } from 'react';
import './player.css';
import SearchBars from '../searchBar/searchBar';
import ResultList from './resultList';

function Player({ spotify }) {

    const [data, setData] = useState(null);
    const [type, setType] = useState('');
    const [ascending, setAscending] = useState(false)

    const addArtist = (artist) => {
        setData(artist)
    }

    const sortPopularity = () => {
        if (ascending) {
            setData(data.sort((a, b) => b.popularity - a.popularity))
        } else {
            setData(data.sort((a, b) => a.popularity - b.popularity))
        }

        setAscending(!ascending)
    }

    return (
        <div>
            <SearchBars 
                spotify={spotify}
                addArtist={addArtist}
                setType={setType}
            />
            {data && 
                <ResultList 
                    result={data} 
                    sort={sortPopularity} 
                    ascending={ascending}
                    type={type}
                />
            }
        </div>
        
    )
}

export default Player;