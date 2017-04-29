const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const http = require('http');
const request = require('request');
const PORT = 8080;

// const skywatchAPI = require('./bin/skywatchAPI');
// skywatchAPI(https,express,app);

// const nasaAPI = require('./bin/nasaAPI');
// nasaAPI(https,express,app);
const gMaps = require('./bin/gMaps');
gMaps(express,app,request);

const gRadiation = require('./bin/gRadiation');
gRadiation(https,express,app);

const rRoute = require('./bin/rRoute');
rRoute(https,express,app);


app.use(express.static('./app'));

app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
