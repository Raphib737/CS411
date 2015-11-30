var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	request = require('request');
	// meetupsController = require('./server/controllers/meetups-controller');

app.use(bodyParser);
var url="http://api.nytimes.com/svc/topstories/v1/technology.json?api-key=aa20e34fa50838b1e142474106eb1598:14:73335924";
mongoose.connect('mongodb://localhost:27017/NYC-home');

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // do more stuff
      for(i=0; i<30; i++){
      	var data = info['results'][i];
      	if(typeof(data) != "object"){
      		break;
      	}else{
      		data = {"title":data["title"],
      					 "date":data["updated_date"],
      					 "abstract":data["abstract"],
      					 "url":data["url"]				
      				};
      		// console.log(data["title"]+"\t"+data["date"])
      		// console.log("\t"+data["abstract"]);
      		// console.log("\t\t"+data["url"]);
      		
      	}
  	  }

    }
  })




// app.use(bodyParser());

// app.get('/', function(req, res){
// 	res.sendfile(__dirname + "/client/views/index.html");
// 	});


// app.use('/js',express.static(__dirname + '/client/js'));

// app.get('/api/meetups',meetupsController.list);
// app.post('/api/meetups',meetupsController.create);

app.listen(3000, function(){
	console.log("im listening");
});