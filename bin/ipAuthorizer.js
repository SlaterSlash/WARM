  // ipAuthorizer is an object with the following design:
  // Properties:
  //   + .authorizedIPs [Array]
  //   + .blockList [Array]
  //   + .timeout [Number] (Default is 1h)
  // Methods:
  //   + .authorize(ip) [void] (Will unauthorize after .timeout is elapsed)
  //   + .unauthorize(ip) [void]
  //   + .isAuthorized(ip) [bool]
  //   + .block(ip) [void]

const PASSWORD;
fs.readFile('../pword.txt',function(err, data){
  if(err || data.toString() === ''){
    console.warn('WARNING: Could not retrieve the password to authenticate IPs. Everyone will be granted free access.');
    PASSWORD = '';
  }
  else{
    PASSWORD = data.toString();
  }
});

function ipAuth(){
  this.authorizedIPs = [];
  this.blockList = [];
  this.timeout = 1000 * 60 * 60;
  this.authorize = function(pword,ip){
    if(typeof ip === 'string'){
      if(pword === PASSWORD){
        this.authorizedIPs.push(ip);
        console.log(ip + ' was authorized access for 1h.');
        setTimeout(unauthorize(ip), this.timeout);
        console.log(ip + '\'s access timed out.');
      }
      else console.log(ip + ' tried to login unsuccessfully.');
    }
    else console.error('Error, someone tried to authorize a wrong IP address.');
  }
  this.unauthorize = function(ip){
    var index = this.authorizedIPs.indexOf(ip);
    if(index > -1){
      this.authorizedIPs.slice(index,1);
    }
    else console.error('Something went wrong during unauthentification.');
  }
  this.isAuthorized = function(ip){
    return (this.authorizedIPs.indexOf(ip) != -1);
  }
  this.isBlocked = function(ip){
    return (this.blockList.indexOf(ip) != -1);
  }
}

module.exports = ipAuth;
