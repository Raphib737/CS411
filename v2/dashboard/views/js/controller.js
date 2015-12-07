var dashApp = angular.module('dashboardApp', []);


dashApp.controller('nyCtrl',function ($scope,$http,$sce,$log) {
	$scope.currentUrl="";
	$scope.url="";
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };



	var api_key="aa20e34fa50838b1e142474106eb1598:14:73335924";
	var url="http://api.nytimes.com/svc/topstories/v1/health.json?api-key="+api_key;	
  // 	$.get(url, function($scope,data, status){
		// $scope.datas=data['results'];
		// console.log($scope.datas);
  // 	});
	$scope.datas={};
	console.log("scope.data first value: "+$scope.data);
  	$http.get(url).success(function(response){
  		$scope.datas=response['results'];
  	});



  	$scope.getDataUrl= function(url){
  		$scope.clickedDiv= url;	
  		$scope.currentUrl = $sce.trustAsResourceUrl($scope.clickedDiv);


  	};
});







