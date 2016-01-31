angular.module('weatherApp')
    .controller('CityListCtrl', ['$scope','CityFactory', function($scope, CityFactory){    
        
        CityFactory.list(function(cities) {
            
            var count = 0;
            for (var city in cities) {
                console.log(cities.valueOf(city));
                if (cities.hasOwnProperty(city)) {
                    count++;
                }
                
            }
//            for(city in cities) {
//                console.log(city[0]);
//            }
        });
    }]);
