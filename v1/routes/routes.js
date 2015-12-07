var http = require('http');
var JSON = require('JSON');

var express = require('express');
var router = express.Router();
module.exports = router;


router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/signup', function(req,res))
    res.render('signup.html')



router.get('/about', function(req,res,next) {
    res.render('about.html');
});


router.get('/home', function(req,res,next) {
    res.render('home.html');
});

app.listen(3000, function(){
	console.log("im listening");
});