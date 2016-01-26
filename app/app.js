//'use strict';

// Declare app level module which depends on views, and components
var weatherApp = angular.module('weatherApp', [
//  'ngRoute',
  'ui.router'
//  'myApp.version'
]);

weatherApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'Views/partials/home.html'
        })
        .state('weather', { 
            url: '/weather',
            templateUrl: 'Views/partials/weather.html',
            controller: 'WeatherCtrl'
//            resolve     : {
//                weather: function(WeatherFactory){
//                    return WeatherFactory.getWeather();
//                }
//            }
        })
        .state('test', {
            url: '/test',
            templateUrl: 'Views/partials/test.html'
        })
        ;
    $urlRouterProvider.otherwise('/');
    
    $locationProvider.html5Mode(true).hashPrefix("!");
});
