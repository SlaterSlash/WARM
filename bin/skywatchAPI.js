const SW_API_KEY = '8017e3b3-978f-497a-842d-67f673f7f92c';
function init(https,express,app){
  app.use('/sw',function(req,res){
    const option = {
      'host':'api.skywatch.co',
      'path':'/data/time' + req.query.date + '/location' + req.query.long + ',' + req.query.lat + '/band/true-colour-image',
      'headers':{
        'username': SW_API_KEY
      }
    };
    https.request(option,function(response){
      var rspData = '';
      response.on('data',function(chunk){
        rspData += chunk;
      });
      response.on('end',function(){
        res.end(rspData);
      });
    }).end();
  });
}


module.exports = init;
