'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
//  'ui.router',
//  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
    
  
    $routeProvider
        .when('/', {
            templateUrl : 'Views/partials/home.html',
            controller  : 'weatherCtrl',
            resolve     : {
                weather: function(WeatherFactory){
                    return WeatherFactory.getWeather();
                }
            }
        });
    $routeProvider.otherwise({redirectTo: '/'});
}]);
