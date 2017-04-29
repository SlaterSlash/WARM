function init(http,express,app){
  var querystring = require('querystring');
  app.use('/grad',function(req,res){
    var post_data = querystring.stringify({
      'DateOfFlight' : '12/2016',
      'Ocode': 'KDYS',
      'DCode': 'EGLL',
      'NumOfSteps' : 2,
      'ClimbTime' : 10
    });
    res.cookie('ASPSESSIONIDQQQBQBRB', 'EHEFEIBCLMILNGKLFFELGPJA', { maxAge: 900000, httpOnly: true });
    const option = {
      'host':'jag.cami.jccbi.gov',
      'path':'/cariprofile2.asp',
      'method':'POST',
      'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data)
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
      },
      'port':398
    };
    var post_request = http.request(option,function(response){
      var rspData = ''
      response.on('data',function(chunk){
        rspData += chunk;
      });
      response.on('end',function(){
        res.end(rspData);
      });
    });
    post_request.write(post_data);
    post_request.end();
  });
}


module.exports = init;
