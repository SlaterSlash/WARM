const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const PORT = 8080;
const nasaAPI = require('./bin/nasaAPI');
const NASA_API_KEY = 'KkELjw9yDCpJuv9SbLSmJ4rAIS1HQwMs8rxv9Utx';

nasaAPI();
app.use(express.static('./app'));

app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
