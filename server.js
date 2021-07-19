const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
// const spotifyAuth = require('./config/spotifyAuth')

const app = express();

app.use(logger('dev'));
app.use(express.json());

// const access_token = spotifyAuth.getAccessToken();
// console.log(access_token, 'hi')


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the 'catch all' route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/spotify', require('./routes/api/posts'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});