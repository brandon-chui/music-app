import React from 'react';
import './login.css';
import { loginUrl, getTokenFromUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            <p>Please Login to your Spotify Account to continue</p>
            <button className='login-button'>
                <a href={loginUrl}>Login</a>
            </button>
        </div>
    )
}

export default Login;