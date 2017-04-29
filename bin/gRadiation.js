<<<<<<< HEAD
const GRAD_API_KEY = 'ASPSESSIONIDCQSBSCTD=PGCFGMEBHMCLNGEACHGNAIDJ';
function init(http,express,app){
  method = method || "post"; 
  app.use('/grad',function(req,res){
    const option = {
      'host':'jag.cami.jccbi.gov',
      'path':'/cariprofile2.asp?DateOfFlight=12%2F2016&Ocode=CYUL&Dcode=CYYZ&NumOfSteps=3&ClimbTime=10&StepAlt_1=10000&StepMin_1=15&StepAlt_2=15000&StepMin_2=20&StepAlt_3=10000&StepMin_3=10&MinDown=10&btnSubmit=Continue',
      'headers':{
       'username': GRAD_API_KEY
      },
      'method': 'POST',
      'port': 80
    };
    http.request(option,function(response){
=======
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
>>>>>>> 6d8b278129516f5c02dc0ad41c74fe09fd361fe0
      var rspData = ''
      response.on('data',function(chunk){
        rspData += chunk;
      });
      response.on('end',function(){
        res.end(rspData);
      });
<<<<<<< HEAD
    }).end();
=======
    });
    post_request.write(post_data);
    post_request.end();
>>>>>>> 6d8b278129516f5c02dc0ad41c74fe09fd361fe0
  });
}


module.exports = init;
