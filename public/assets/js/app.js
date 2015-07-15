var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/default.html',
    })

    .when('/contact-info/:contact_index', {
      templateUrl: 'templates/contact_info.html',
      controller: 'contactInfoCtrl'
    })

    .otherwise({redirectTo: '/home'});
})

.controller('homeCtrl', ['$scope','$http', function ($scope, $http){
    // Get Contacts
    $http.get('assets/contacts.json').

      success(function(data, status) {
        $scope.contacts = data.contacts;
        console.log('Get data successfully, status: '+status+'\n');
      }).

      error(function(data, status, headers, config) {
        console.log('Fail to get data, status: '+status+'/n');

      });

}])

.controller('contactInfoCtrl', function ($scope, $routeParams){

  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
  $scope.editable = false;
  $scope.currentContact.fullname = $scope.currentContact.firstname + ' ' + $scope.currentContact.lastname;

})

.filter('formatNum', function(){

  return function(input){

    input = input || '';

    var output = '('+input.slice(0,3)+')'+input.slice(3,6)+'-'+input.slice(6);
    
    return output;

  }
})

.filter('formatName', function(){
	return function(input){
		
		input = input || '';
		
		var output = input.firstname + ' ' + input.lastname;
		
		return output
	}
});
