


$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) { 
        var location = $(this).val().toLowerCase();
        var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='".concat(location,"')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
		$.get(url, function(data) {
	  		//alert( "Data Loaded: " + data );
		  	// var json = data;
		  	// console.log(json);
		  	// console.log(json["query"]["results"]["channel"]);
		  	var dayforecast = data["query"]["results"]["channel"]["item"]["forecast"];
		  	var table = document.getElementById("tbody");
		  	document.getElementById("tbody").innerHTML="";
		  	for (var i = 0; i<dayforecast.length; i++) {
		  		var row = table.insertRow(-1);
				row.insertCell(0).innerHTML = dayforecast[i]['date'];
				row.insertCell(1).innerHTML = dayforecast[i]['day'];
				row.insertCell(2).innerHTML = dayforecast[i]['text'];
				row.insertCell(3).innerHTML = dayforecast[i]['high'];
				row.insertCell(4).innerHTML = dayforecast[i]['low'];
		  };
		});
	}});
