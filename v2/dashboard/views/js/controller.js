
var dashApp = angular.module('dashboardApp', []);


dashApp.controller('SubjectDropDownController', function ($scope) {

});


//    .controller('Subject',
//     ['$rootScope', '$scope', 'myservice',
//     function ($rootScope, $scope, myservice) {
//        $scope.myservice = myservice;   
//     }]);

// testModule
//    .controller('QuestionsStatusController2',
//     ['$rootScope', '$scope', 'myservice',
//     function ($rootScope, $scope, myservice) {
//       $scope.myservice = myservice;
//     }]);

// testModule
//     .service($scope, function() {
//       $scope.subject = "yyy"s;
//     });



dashApp.controller('nyCtrl',function ($scope,$http,$sce,$log) {
	$scope.currentUrl="";
	$scope.url="";
  $scope.subjects = ["home","world","national","politics","business","technology","science",
                       "health","sports","arts","fashion","dining","travel"];
  $scope.selectedItem=$scope.subjects[0];

    $scope.dropboxitemselected = function (item) {
        $scope.selectedItem = item;
        
    }


	var api_key="aa20e34fa50838b1e142474106eb1598:14:73335924";
	var url="http://api.nytimes.com/svc/topstories/v1/"+$scope.selectedItem+".json?api-key="+api_key;	
  // 	$.get(url, function($scope,data, status){
		// $scope.datas=data['results'];
		// console.log($scope.datas);
  // 	});
	$scope.datas={};
  $http.get(url).success(function(response){
  	$scope.datas=response['results'];
    $scope.datas['seen']=false
  });

  	$scope.getDataUrl= function(url){
  		$scope.clickedDiv= url;	
  		$scope.currentUrl = $sce.trustAsResourceUrl($scope.clickedDiv);


  	};
});


