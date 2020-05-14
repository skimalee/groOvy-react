import tokenService from  './tokenService'

const BASE_URL = '/api/spotify/'

async function connectSpotify(query) {
    return fetch(BASE_URL + 'get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({query}),
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Invalid request to Spotify');
    })
    .then(data => {
        if (data) {
            return data
        } else {
            return null
        }
    })
}