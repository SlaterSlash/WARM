const NASA_API_KEY = 'KkELjw9yDCpJuv9SbLSmJ4rAIS1HQwMs8rxv9Utx';
const GRAD_API_KEY = 'ASPSESSIONIDCQSBSCTD=PGCFGMEBHMCLNGEACHGNAIDJ';
const FPDB_API_KEY = 'qoCf2fw9AwAWy4h5iEscNZC3zpXRmg058GTO27TB';
const SW_API_KEY = '8017e3b3-978f-497a-842d-67f673f7f92c';

function init(https,express,app){

  // nasaAPI
  app.use('/nasa',function(req,res){
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

// SkyWatchAPI
  app.use('/sw',function(req,res){
    const option2 = {
      'host':'api.skywatch.co',
      'path':'/data/time/' + req.query.date + '/location/' + + req.query.lon + ',' + req.query.lat + '/band/true-colour-image',
      'headers':{
        'x-api-key': SW_API_KEY
      }
    };
    https.request(option2,function(response){
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
