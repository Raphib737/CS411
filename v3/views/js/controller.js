
var dashApp = angular.module('dashboardApp', []);


dashApp.controller('nyCtrl',function ($scope,$http,$sce,$log) {
	$scope.currentUrl="";
	$scope.url="";
  $scope.subjects = ["home","world","national","politics","business","technology","science",
                       "health","sports","arts","fashion","dining","travel"];
  $scope.selectedItem=$scope.subjects[0];
  $scope.datas={};


//First Instance populating News Feed on the left Side
  var api_key="aa20e34fa50838b1e142474106eb1598:14:73335924";
  var url="http://api.nytimes.com/svc/topstories/v1/"+$scope.selectedItem+".json?api-key="+api_key; 
  $http.get(url).success(function(response){
    $scope.datas=response['results'];
  });

//Dropdown Menu for New York Times Data to select Topics 
  $scope.dropboxitemselected = function (item) {
        $scope.selectedItem = item;
        var url="http://api.nytimes.com/svc/topstories/v1/"+$scope.selectedItem+".json?api-key="+api_key; 
        $http.get(url).success(function(response){
          $scope.datas=response['results'];
          });
  }

//Gets weather information based on the input from the text
  $scope.weather = function(){
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='".concat($scope.weatherInfo,"')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
    $http.get(url).success(function(response){
      $scope.locTitle    =response["query"]["results"]["channel"]["location"]['city']
                        + " " + response["query"]["results"]["channel"]["location"]['region'] 
                        + "," +response["query"]["results"]["channel"]["location"]['country']
      var dayforecast    =response["query"]["results"]["channel"]["item"]["forecast"][0];
      $scope.date        =dayforecast['date'];
      $scope.dayforecast =dayforecast['day'];
      $scope.texts       =dayforecast['text'];
      $scope.high        =dayforecast['high'];
      $scope.low         =dayforecast['low'];
      $scope.weatherInfo = ""
  });
  }

  $scope.getDataUrl= function(url){
    $scope.clickedDiv= url; 
    $scope.currentUrl = $sce.trustAsResourceUrl($scope.clickedDiv);
    };



});


