import React, { useState } from 'react';
import './player.css';
import SearchBars from '../searchBar/searchBar';
import ResultList from './resultList';
import { Button } from '@material-ui/core';

function Player({ spotify }) {

    const [data, setData] = useState([]);
    const [ascending, setAscending] = useState(false)

    const addArtist = (artist) => {
        setData(artist)
    }

    const sortPopularity = () => {
        if (ascending) {
            setData(data.sort((a, b) => b.popularity - a.popularity))
            console.log('ascending', data);
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
            />
            <Button 
                type="submit" 
                onClick={sortPopularity}
            >
                Sort By Populartiy: {ascending ? 'Ascending' : 'Descending'}
            </Button>
            {/* Form */}
            {/* Result */}
            <ResultList result={data} />
        </div>
        
    )
}

export default Player;