import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './searchBar.css';

function SearchBars({ spotify, setData }) {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [track, setTrack] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        async function search() {
            if (artist && album) {
                await spotify.searchAlbums(album)
                    .then((res) => {
                        const artistAlbum = res.albums.items.filter(album => {
                            let arr = album.artists.map(art => {
                                return art.name;
                            })
                            return arr.some(name => {
                                return name.toLowerCase().includes(artist.toLowerCase());
                            })
                        })
                        setData({
                            result: artistAlbum,
                            type: 'Albums by Artist',
                            search: `${album} by ${artist}`,
                        });
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
                        setData({
                            result: data.artists.items,
                            type: 'Artists',
                            search: artist,
                        });
                        setArtist('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            } else if (album) {
                await spotify.searchAlbums(album)
                    .then((data) => {
                        setData({
                            result: data.albums.items,
                            type: 'Albums',
                            search: album,
                        });
                        setAlbum('');
                    },
                        (err) => {
                            console.log(err);
                        }
                    )
            } else if (track) {
                await spotify.searchTracks(track)
                    .then((data) => {
                        setData({
                            result: data.tracks.items,
                            type: 'Tracks',
                            search: track,
                        });
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
            <form onSubmit={handleSubmit} autoComplete="off">
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