import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/login';
import Music from './components/music/music';
import { getTokenFromUrl } from './components/login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataValue } from './components/login/data';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }
  }, [])

  return (
    <div className="App">
      <div className='App-header'>
        <h2>Music App</h2>
        {!token && <Login />}
      </div>
      {token && <Music spotify={spotify} />}
    </div>
  );
}

export default App;
