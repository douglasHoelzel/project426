var myApp = angular.module('myApp', ['ui.router']);

myApp.config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state("home", {
          url: "/home",
          templateUrl: "assetView.html",
          controller: "MainController"
        })
        .state("assetView", {
          url: "/assetView",
          templateUrl: "assetView.html",
          controller: "MainController"
        })



      ;

    }
  ]);
