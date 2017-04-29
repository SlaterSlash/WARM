const FPDB_API_KEY = 'qoCf2fw9AwAWy4h5iEscNZC3zpXRmg058GTO27TB';
function init(https,express,app){
  app.use('/fpdb',function(req,res){
    const option = {
      'host':'api.flightplandatabase.com',
      'path':'/plan/' + req.query.flightID,
      'headers':{
        'username': FPDB_API_KEY
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
