const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('./login'));
app.post('/form', function(req, res){
  console.log(req.headers);
  res.end(JSON.stringify(req.body));
});
app.listen(PORT,function(){
  console.log('The server is up! Point your browser to localhost:' + PORT);
});
