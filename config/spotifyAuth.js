const request = require('request');

const CLIENT_ID = process.env.SPOTIFY_API;
const CLIENT_SECRET = process.env.SPOTIFY_SECRET;

function getAccessToken() {
    const options = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
    }

    
    request.post(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
           let token = body.access_token
           console.log(token)
        }
    })

    // fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
    //     },
    //     form: {
    //         grant_type: 'client_credentials'
    //     }
    // })
    // .then(res => {
    //     console.log(res)
        // if (res.ok) return res.json();
        // throw new Error('Error with access token')
    // })
    // .then(data => {
    //     console.log(data)
    // })
}

module.exports = { getAccessToken }