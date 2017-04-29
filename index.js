const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const PORT = 8080;
const nasaAPI = require('./bin/nasaAPI');
nasaAPI();

const rRoute = require('./rRoute');
rRoute(https,express,app);

app.use(express.static('./app'));

app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
