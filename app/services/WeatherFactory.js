angular.factory('WeatherFactory', ['$http', function($http){
    var WeatherFactory = function(){
        this.initialize = function(){
            var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8fac16c780bdac0a55b68a2f937b949a';
            var forecastData = http.get(url);
            var self = this;
            
            forecastData.then(function(response){
                angular.extend(self, response.data);  
            });
        };
        this.initialize();
    };
    
    return (WeatherFactory);    
//    $http({
//        method: 'GET',
//        url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8fac16c780bdac0a55b68a2f937b949a'
//    }).then(function (response) {
//        $scope.status = response.status;
//        $scope.data = response.data;
//    }, function (response) {
//        return response;
//    });
}]);

