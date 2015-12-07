var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateURL: 'index.jade'
	})
	.when('/home',{
		templateURL: 'home.html'
	})
	.otherwise({redirectTo: '/'});
});

