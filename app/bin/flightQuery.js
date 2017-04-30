<script type="text/javascript" src="flight?flightID=123">

function flightQuery(flightID,callback){
  var request = new XMLHttpRequest;
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(data);
    }
  }
}
