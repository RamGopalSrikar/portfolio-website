



function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
        console.log(response)
        document.getElementById('count1').innerHTML='View Count : ' + response
    }
  };
  xhttp.open("GET", "https://4o71udw7c0.execute-api.us-east-1.amazonaws.com/v1", true);
  xhttp.send();
}