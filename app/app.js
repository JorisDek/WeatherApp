'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'ngState',
  'myApp.version'
])
.config(['$routeProvider','$stateProvider', function($routeProvider, $stateProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Views/partials/home.html'
        });
}]);
