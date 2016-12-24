var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/home.html'
  })
  .when('/login', {
    templateUrl: 'app/views/login.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('cyan');
});
