angular.module('weatherApp')
    .factory('WeatherFactory', ['$http', function($http){
        return {
            list: function(callback){  
                $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Voorburg&units=metric&lang=nl&APPID=8fac16c780bdac0a55b68a2f937b949a').success(callback);
            }
        };
    }]);

