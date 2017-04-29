
window.addEventListener('load', function() {
  const canvas = document.getElementById('main-frame');
  const context = canvas.getContext('2d');
  var imgObj = new Image();
  imgObj.addEventListener('load', function(e) {
    context.drawImage(imgObj,0,0);
  });
  const lat = 50;
  const lon = 50;
  console.log(getNASAImageryLink(lat,lon));
  // imgObj.src = getNASAImageryLink(lat,lon);
});


function getNASAImageryLink(lat,lon){
  var data = '';
  var linkRequest = new XMLHttpRequest();
  linkRequest.open('GET',window.location.href + 'nasa?lon=' + lon + '&lat=' + lat);
  linkRequest.onreadystatechange = function(){
    data = linkRequest.responseText;
    console.log(linkRequest.responseText);
  }
  linkRequest.send();
}
