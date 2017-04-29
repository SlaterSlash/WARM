// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
var key = require('../apiKEYS.json');
function init(express,app,request){
  app.use('/gMaps',function(req,res){
    request('https://maps.googleapis.com/maps/api/js?key=AIzaSyCQFuPUg1TkMzG5uEvXhfIOad9M3Okb2PQ' + '&callback=initMap',function(error,response,body){
      res.end(body);
    });
  });
}
module.exports = init;
