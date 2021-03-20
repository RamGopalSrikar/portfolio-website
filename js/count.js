



function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
        console.log(response)
        document.getElementById('count1').innerHTML='View Count : ' + response['Body']['viewcount']
    }
  };
  xhttp.open("GET", "https://ed886ht9ca.execute-api.ca-central-1.amazonaws.com/v1/viewcount", true);
  xhttp.send();
}