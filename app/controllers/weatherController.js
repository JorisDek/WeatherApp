angular.module('weatherApp')
    .controller('WeatherCtrl', ['WeatherFactory', function(WeatherFactory){
        $scope.cityname = WeatherFactory.name;
    }]);