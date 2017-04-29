const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const http = require('http');
const PORT = 8080;

<<<<<<< HEAD
const skywatchAPI = require('./bin/skywatchAPI');
skywatchAPI(http,express,app);

// const gRadiation = require('./bin/gRadiation');
// gRadiation(http,express,app);

const nasaAPI = require('./bin/nasaAPI');
nasaAPI(https,express,app);

=======
const gRadiation = require('./bin/gRadiation');
gRadiation(https,express,app);
const nasaAPI = require('./bin/nasaAPI');
nasaAPI(https,express,app);
>>>>>>> 6d8b278129516f5c02dc0ad41c74fe09fd361fe0
const rRoute = require('./bin/rRoute');
rRoute(https,express,app);

app.use(express.static('./app'));

app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
