angular.module('weatherApp')
        .factory('WeatherFactory'['$http', '$scope', function($http, $scope){
            var apidata = {
                getWeather: function(){
                    var promise = $http({
                        method: 'GET',
                        url: 'api.openweathermap.org/data/2.5/weather?q=London'
                    });
                    promise.succes(function(data, status, headers, conf){
                        $scope.Weather = data;
                        return data;
                    });
                    return promise;
                }
            }    
            return apidata;
        }]);