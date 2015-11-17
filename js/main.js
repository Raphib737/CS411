


$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) { //Enter Key
        var location = $(this).val().toLowerCase(); //Grabs Location string from Search Bar
        var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='".concat(location,"')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
		$.get(url, function(data) {
			//Parsing data and removing past data 
		  	var dayforecast = data["query"]["results"]["channel"]["item"]["forecast"];
		  	var table = document.getElementById("tbody"); 
		  	document.getElementById("tbody").innerHTML="";
		  	document.getElementById("location").innerHTML=data["query"]["results"]["channel"]["description"]

		  	for (var i = 0; i<dayforecast.length; i++) { //Append 5 day forecast onto the website
		  		var row = table.insertRow(-1);
				row.insertCell(0).innerHTML = dayforecast[i]['date'];
				row.insertCell(1).innerHTML = dayforecast[i]['day'];
				row.insertCell(2).innerHTML = dayforecast[i]['text'];
				row.insertCell(3).innerHTML = dayforecast[i]['high'];
				row.insertCell(4).innerHTML = dayforecast[i]['low'];
		  };
		});
	}});





var url="http://api.nytimes.com/svc/topstories/v1/technology.json?api-key=aa20e34fa50838b1e142474106eb1598:14:73335924";
$.get(url, function(data){
	console.log(data);
	for(var x =0; x<30;x++){
		console.log(data['results'][x]["title"]+"\n"); 
		console.log("\t\t"+data['results'][x]["abstract"]);
	}
});