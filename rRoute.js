const https = require('https');
const express = require('express');
const app = express();
function init(){
  app.get('/fpdb',function(req,res){
    const option = {
      'host':'api.flightplandatabase.com',
      'path':'/plan?id=' + req.query.flighID,
      'headers':{
        'user': FPDB_API_KEY
      }
    };
    https.request(option,function(response){
      var rspData = ''
      response.on('data',function(chunk){
        rspData += chunk;
      });
      response.on('end',function(){
        res.end(rspData);
      })
    }).end();
  });
}


module.exports = init;
