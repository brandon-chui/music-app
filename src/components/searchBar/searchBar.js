import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './searchBar.css';

function SearchBars({ spotify }) {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        async function search(x) {
            await spotify.searchArtists(x)
                .then((data) => {
                    console.log('search artist result - ', data.artists.items)
                    setData(data.artists.items)
                },
                (err) => {
                    console.log(err)
                }
            )
                
        }
        search(artist);
    }

    const renderArtist = art => {
        return art.map(a => {
            return (
                <div key={a.id} className='artist-images'>
                    {a.images[0] ? 
                        <img src={a.images[0].url} alt='artist loading' /> 
                        : 
                        <img src={require('./noimage.png')} alt='null' /> 
                    }                    
                </div>
            )
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Artist"
                    name="artist"
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                    type="text"
                />
                {/* <TextField
                    label="Album"
                    name="album"
                    onChange={(e) => setAlbum(e.target.value)}
                    value={album}
                    type="text"
                />
                <TextField
                    label="Track"
                    name="track"
                    onChange={(e) => setTrack(e.target.value)}
                    value={track}
                    type="text"
                /> */}
                <Button type="submit" style={{ verticalAlign: 'bottom' }}>
                    submit
            </Button>
            </form>
            {data && renderArtist(data)}
        </div>
    )
}

export default SearchBars;