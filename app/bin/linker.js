var files = [
  'mapLoader.js'
];

files.forEach(function(elm){
  var script = document.createElement('script');
  script.src = 'bin/' + elm;
  script.type = 'text/javascript';
  document.head.appendChild(script);
});
