var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/homeView.html',
    controller: 'homeController'
  })
  .when('/dashboard', {
    templateUrl: 'app/views/dashboardView.html',
    controller: 'dashboardController'
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
