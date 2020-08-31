import React from 'react';
import './login.css';
import { loginUrl, getTokenFromUrl } from './spotify'

function Login() {
    console.log(getTokenFromUrl())

    return (
        <div className='login'>
            <a href={loginUrl}>Login</a>
        </div>
    )
}

export default Login;