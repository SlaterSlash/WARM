const NASA_API_KEY = 'KkELjw9yDCpJuv9SbLSmJ4rAIS1HQwMs8rxv9Utx';
function init(){
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
}
module.exports = init;
