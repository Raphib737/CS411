
var express = require("express");
var app     = express();


app.use(express.static('views'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.get('/',function(req,res){
  res.render('index');
  //It will find and locate index.jade from View or Scripts
});





app.listen(3000);
console.log("Running at Port 3000");