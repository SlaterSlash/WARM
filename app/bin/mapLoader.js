var urlImgList = [];

window.addEventListener('load', function() {
  const lat = 50;
  const lon = 50;
  initCanvasWindow(lat,lon);
});

function getNASAImageryLink(lat,lon,x,y,dx,dy){
  var linkRequest = new XMLHttpRequest();
  linkRequest.open('GET',window.location.href + 'nasa?lon=' + lon + '&lat=' + lat);
  linkRequest.onreadystatechange = function(){
    loadImage(linkRequest.responseText,x,y,dx,dy);
  }
  linkRequest.send();
}

function loadImage(url,x,y,dx,dy){
  const canvas = document.getElementById('main-frame');
  const context = canvas.getContext('2d');
  var imgObj = new Image();
  imgObj.addEventListener('load', function(e) {
    context.drawImage(imgObj,x,y,dx,dy);
  });
  imgObj.src = url;
  urlImgList.push({
    'url':url,
    'x':x,
    'y':y,
    'dx':dx,
    'dy':dy
  });
}


window.addEventListener('resize', function(e) {
  const canvas = document.getElementById('main-frame');
  const context = canvas.getContext('2d');
  canvas.width = 0.7 * window.innerWidth;
  canvas.height = window.innerHeight;
  urlImgList.forEach(function(imgData){
    var imgObj = new Image();
    imgObj.addEventListener('load', function(e) {
      context.drawImage(imgObj,imgData.x,imgData.y,imgData.dx,imgData.dy);
    });
    imgObj.src = imgData.url;
  });
});


function initCanvasWindow(lat,lon){
  const SCALE = 5;
  const canvas = document.getElementById('main-frame');
  var gridSize = Math.ceil(SCALE*canvas.width/512) * Math.ceil(SCALE*canvas.height/512);
  var gridX = Math.ceil(SCALE*canvas.width / 512);
  var i = 0;
  const fetch = setInterval(function(){
    getNASAImageryLink(lat-0.025*Math.floor(i/gridX),lon+0.025*(i % gridX),512/SCALE*(i % gridX),512/SCALE*Math.floor(i/gridX),512/SCALE,512/SCALE);
    i++;
    if(i >= gridSize){
      clearInterval(fetch);
    }
  },1000);
}
