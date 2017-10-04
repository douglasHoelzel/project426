var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    console.log("inside of app.js");
  $routeProvider
  .when("/", {
        templateUrl : "index.html"
    })
  .when("/red", {
    templateUrl: '/redTest.html',
    controller: 'MainController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
