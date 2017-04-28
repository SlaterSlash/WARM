var files = [
  'sylvester.js',
  'glUtils.js',
  'glSetup.js'
];

files.forEach(function(elm){
  var script = document.createElement('script');
  script.src = 'bin/' + elm;
  script.type = 'text/javascript';
  document.head.appendChild(script);
});
