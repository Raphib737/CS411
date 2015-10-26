// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       document.getElementById("espn").innerHTML = xhttp.responseText;
//     }
//   }
//   xhttp.open("GET", "api.espn.com/v1/sports/news/headlines/top", true);
//   xhttp.send();





$http({
  method: 'GET',
  url: 'api.espn.com/v1/sports/news/headlines/top'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });