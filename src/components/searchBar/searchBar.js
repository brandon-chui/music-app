import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './searchBar.css';

function SearchBars({ spotify, addArtist, setType }) {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        async function search() {
            if (artist && album) {
                await spotify.searchAlbums(album)
                    .then((res) => {
                        console.log('search album + artist result - ', res)
                        const artistAlbum = res.albums.items.filter(album => {
                            let arr = album.artists.map(art => {
                                return art.name;
                            })
                            return arr.some(name => {
                                return name.toLowerCase().includes(artist.toLowerCase());
                            })
                        })
                        setType('Albums by Artist');
                        addArtist(artistAlbum);
                        setArtist('');
                        setAlbum('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            } else if (artist) {
                await spotify.searchArtists(artist)
                    .then((data) => {
                        setType('Artists');
                        addArtist(data.artists.items);
                        setArtist('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            } else if (album) {
                await spotify.searchAlbums(album)
                    .then((data) => {
                        setType('Albums');
                        addArtist(data.albums.items);
                        setAlbum('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            } else if (track) {
                await spotify.searchTracks(track)
                    .then((data) => {
                        setType('Tracks');
                        addArtist(data.tracks.items);
                        setTrack('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            }
            

        }
        search();
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
                <TextField
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
                />
                <Button type="submit" style={{ verticalAlign: 'bottom' }}>
                    submit
            </Button>
            </form>
        </div>
    )
}

export default SearchBars;