export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = 'c4baccbba0164c739eb555f7031baf26';

const scopes = [
    'ugc-image-upload',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    // return object with key/values of url
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((init, item) => {
            let parts = item.split('=');
            init[parts[0]] = decodeURIComponent(parts[1])

            return init;
        }, {})
}

export const loginUrl = `
    ${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`