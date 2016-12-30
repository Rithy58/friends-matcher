app.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.name = '';
  $scope.loggedin = false;
  $http({
    method: 'GET',
    url: '/auth/profile'
  }).then(function(res) {
    $scope.name = res.data.displayName;
    $scope.loggedin = true;
  }, function(res) {
    $scope.name = '';
    $scope.loggedin = false;
  });
}]);
