angular.module('ngConf', [])
  .controller('ngConfController',['$scope', '$http', function($scope, $http) {
    var initLocations = function(){
      var doneCallbacks = function(res) {
        $scope.locations = {};
        $scope.locations.options = [];
        $scope.locations.info = res.data;
        for (var i = 0; i < $scope.locations.info.length; i++) {
          if ($scope.locations.info[i].name !== 'Salt Lake City')
            $scope.locations.options.push($scope.locations.info[i].name);
        };
      };
      var failCallbacks = function(res) {
        console.log(res);
      };

      $http.get('/src/page-content/locations.json').then(doneCallbacks, failCallbacks)
    }();

    var initLocationsInfo = function(){
      var doneCallbacks = function(res) {
        $scope.locations.extended = res.data;

        console.log($scope.locations.extended);
      };
      var failCallbacks = function(res) {
        console.log(res);
      };

      $http.get('/src/page-content/locations-info.json').then(doneCallbacks, failCallbacks)
    }();
  }]);