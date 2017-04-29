const FPDB_API_KEY = 'qoCf2fw9AwAWy4h5iEscNZC3zpXRmg058GTO27TB';

function init(https,express,app){

// rRoute
app.use('/flight',function(req,res){
  const option3 = {
    'host':'api.flightplandatabase.com',
    'path':'/plan/' + req.query.flightID,
    'headers':{
      'username': FPDB_API_KEY
    }
  };
  https.request(option3,function(response){
    var rspData = '';
    response.on('data',function(chunk){
      rspData += chunk;
    });
    response.on('end',function(){

      console.log('Flight Plan ' + JSON.parse(rspData)['id']);

      var route = 'Flight Plan ' + JSON.parse(rspData)['id'] + ' from ' + JSON.parse(rspData)['fromName'] + ' to ' + JSON.parse(rspData)['toName'] + '\n';

      for (var i = 0; i < JSON.parse(rspData)['waypoints']; i++)
      {
        var radiation = 0;
        var radiationTotal = 0;

        var latitude = JSON.parse(rspData)['route']['nodes'][i]['lat'];
        var longitude = JSON.parse(rspData)['route']['nodes'][i]['lon'];

        //some code to get the radiation

        radiationTotal = radiation * 100 / 3.11;

        console.log('Waypoint[' + i + ']: '+ 'Latitude= ' + latitude + ' Longitude= ' + longitude + ' Ionizing Radiation ' + radiation + ' millisieverts' + ' % of total ' + radiationTotal);

        route = route + 'Waypoint[' + i + ']: '+ 'Latitude= ' + latitude + ' Longitude= ' + longitude + ' Ionizing Radiation ' + radiation + ' millisieverts' + ' % of total ' + radiationTotal + '\n';

      } // for


      res.end(route);
    });

  }).end();
});
}

module.exports = init;
