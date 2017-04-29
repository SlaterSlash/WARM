function init(http,express,app){
  app.use('/grad',function(req,res){
    const post_data = 'DateOfFlight=12%2F2016&Ocode=KDYS&DCode=EGLL&NumOfSteps=2&ClimbTime=10&btnSubmit=Continue';
    console.log(Buffer.byteLength(post_data));
    const option = {
      'host':'jag.cami.jccbi.gov',
      'path':'/cariprofile.asp',
      'method':'POST',
      'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data),
          'Cookie':'ASPSESSIONIDQQQBQBRB=EHEFEIBCLMILNGKLFFELGPJA',
          'Referer': 'http://jag.cami.jccbi.gov/cariprofile.asp',
          'Origin': 'http://jag.cami.jccbi.gov',
          'Connection': 'keep-alive'
      }
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
