var weatherApp = angular.module('weatherApp', [
//  'ngRoute',
  'ui.router'
//  'myApp.version'
]);
weatherApp.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', 'WeatherFactory', function($scope, WeatherFactory){
        $scope.cityname = 'Voorburg';
    }]);