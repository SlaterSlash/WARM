const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const PORT = 8080;
const rRoute = require('./rRoute');
const NASA_API_KEY = 'KkELjw9yDCpJuv9SbLSmJ4rAIS1HQwMs8rxv9Utx';

gRadiation(https,express,app);
rRoute(https,express,app);

app.use(express.static('./app'));
app.get('/nasa',function(req,res){
  const option = {
    'host':'api.nasa.gov',
    'path':'/planetary/earth/imagery?lon=' + req.query.lon + '&lat=' + req.query.lat + '&cloud_score=True&api_key=' + NASA_API_KEY
  };
  https.request(option,function(response){
    var rspData = ''
    response.on('data',function(chunk){
      rspData += chunk;
    });
    response.on('end',function(){
      res.end(JSON.parse(rspData)['url']);
    })
  }).end();
});
app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
