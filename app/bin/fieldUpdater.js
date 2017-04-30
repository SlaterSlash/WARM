window.addEventListener('load', function() {
  const flightID = document.getElementById('flightID');
  flightID.addEventListener('keyup', function(event) {
    flightQuery(flightID.value,function(data){
      center.lat = data.lat;
      center.lon = data.lon;
    });
    initMap();
  });
});
