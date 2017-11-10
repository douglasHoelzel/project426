(function () {

  var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);
  myApp.config(
    ["$stateProvider", "$urlRouterProvider",
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
          .state("home", {
            url: "/home",
            templateUrl: "home.html",
            controller: "MainController"
          })

          .state("assetView", {
            url: "/assetView/:tickerId",
            templateUrl: "assetView.html",
            controller: function ($scope, $stateParams) {
              $scope.tickerId = $stateParams.tickerId;
            }
          })
      }
    ]);

}());