const API_KEY = 'KkELjw9yDCpJuv9SbLSmJ4rAIS1HQwMs8rxv9Utx';
window.addEventListener('load', function() {
  const canvas = document.getElementById('main-frame');
  const lat = 50;
  const lon = 50;
  console.log(loadMapChunk(lat,lon));
});


function loadMapChunk(lat,lon){
  var data = '';
  var linkRequest = new XMLHttpRequest();
  linkRequest.open('GET','https://api.nasa.gov/planetary/earth/imagery?lon=' + lon + '&lat=' + lat + '&cloud_score=True&api_key=' + API_KEY,true);
  linkRequest.onreadystatechange = function(){
    console.log('linkRequest.readyState,linkRequest.status');
  }
  return data;
}
