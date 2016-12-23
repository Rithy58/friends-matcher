var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html'
  })
  .when('/login', {
    templateUrl: 'views/login.html'
  })
  .otherwise({

  })
});
