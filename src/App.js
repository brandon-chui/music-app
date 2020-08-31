import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/login';
import { getTokenFromUrl } from './components/login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }

    console.log(`Hi, ${token}`)
  }, [token])

  return (
    <div className="App">
      {token ? (
        <h2>Logged In</h2>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
