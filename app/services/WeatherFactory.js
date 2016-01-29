angular.factory('WeatherFactory'['$http', '$scope', function($http, $scope){
    $http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8fac16c780bdac0a55b68a2f937b949a'
    }).then(function (response) {
        $scope.status = response.status;
        $scope.data = response.data;
    }, function (response) {
        return response;
    });
}]);

