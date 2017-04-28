const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8080;
// const ipAuthorizer = require('./bin/ipAuthorizer');
// const ipAuth = new ipAuthorizer();

// app.use('/',function(req,res){
//   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
//   if(ip == '::1' || ipAuth.isAuthorized(ip)){
//     res.send('Youre in!');
//   }
//   else{
//     res.send('Aww sorry :(');
//   }
// });

app.post('/form', function(req, res){
  res.end(JSON.stringify(req.body));
});

app.use(express.static('./app'));

app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
