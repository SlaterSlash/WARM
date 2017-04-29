const FPDB_API_KEY = 'qoCf2fw9AwAWy4h5iEscNZC3zpXRmg058GTO27TB';
function init(https,express,app){
  app.use('/fpdb',function(req,res){
    const option = {
      'host':'api.flightplandatabase.com',
      'path':'/plan/' + req.query.flightID,
      'headers':{
        'username': FPDB_API_KEY,
        'Content-Type': 'application/json; charset=utf-8',
        'X-API-Version': 1,
        'X-Units': 'SI',
        'X-Limit-Cap': 100,
        'X-Limit-Used': 1
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
