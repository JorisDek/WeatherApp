
angular.module('weatherApp')
    .controller('WeatherCtrl', ['$scope', '$http', 'WeatherFactory', function($scope, $http, WeatherFactory){             
//        $http({
//            method: 'GET',
//            url: 'http://api.openweathermap.org/data/2.5/forecast?q=Voorburg&units=metric&lang=nl&APPID=8fac16c780bdac0a55b68a2f937b949a'
//        }).then(function (response) {
//            $scope.status = response.status;
//            $scope.data = response.data;
//        }, function (response) {
//            $scope.response = response.data;
//        });
        
        WeatherFactory.list(function(data){
            $scope.data = data;
            var datalist = data.list;
            console.log(datalist);
            for(var list in datalist){
                console.log(list);  
                
            }
        });
    }]);
