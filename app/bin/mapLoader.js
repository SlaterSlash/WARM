
window.addEventListener('load', function() {
  const lat = 50;
  const lon = 50;
  getNASAImageryLink(lat,lon);
});


function getNASAImageryLink(lat,lon){
  var linkRequest = new XMLHttpRequest();
  linkRequest.open('GET',window.location.href + 'nasa?lon=' + lon + '&lat=' + lat);
  linkRequest.onreadystatechange = function(){
    loadImage(linkRequest.responseText,0,0);
  }
  linkRequest.send();
}

function loadImage(url,x,y){
  console.log(url);
  const canvas = document.getElementById('main-frame');
  const context = canvas.getContext('2d');
  var imgObj = new Image();
  imgObj.addEventListener('load', function(e) {
    context.drawImage(imgObj,0,0);
  });
  imgObj.src = url;
}
