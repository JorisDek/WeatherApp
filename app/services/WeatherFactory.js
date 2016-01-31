angular.module('weatherApp')
        .factory('WeatherFactory', ['$http', '$q', function($http, $q){
//    var WeatherFactory = function(){
//        this.initialize = function(){
//            var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8fac16c780bdac0a55b68a2f937b949a';
//            var forecastData = http.get(url);
//            var self = this;
//            
//            forecastData.then(function(response){
//                angular.extend(self, response.data);  
//            });
//        };
//        this.initialize();
//    };
    
    //return (WeatherFactory); 
    
        
    var deferred = $q.defer();
    getForecast = function () {
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8fac16c780bdac0a55b68a2f937b949a'
        }).succes(function (data) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {  
        });
    };
    return deferred.promise;
        
}]);

