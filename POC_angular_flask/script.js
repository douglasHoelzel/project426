(function() {
    
      var app = angular.module("test", []);
    
      var MainController = function($scope, $http) {
    
        var on_complete = function(response) {
          $scope.data = response.data;
        };
    
        var on_error = function(response) {
          $scope.error = "Error getting data";
        };
    
        $http.get("http://localhost:5000/EFA/10-05-2015/10-05-2016")
          .then(on_complete, on_error);
    
        $scope.test_value = "This is a test string";
    
      };
    
      app.controller("MainController", ["$scope", "$http", MainController]);
    
    }());