angular.module('weatherApp')
    .controller('CityListCtrl', ['$scope','CityFactory', function($scope, CityFactory){    
        
        CityFactory.list(function(cities) {
            //console.log(cities);
            //$scope.cities = cities;
          
            
            if ($scope.searchText == 'Voorburg'){
                console.log('JEEJ Voorburg');
            }
           
                
//            for (var i = 0; i < 209579; i++) {
//                if (cities[i].name == 'Voorburg'){
//                    console.log(cities[i].name);
//                    $scope.cityname = cities[i].name;
//                }
//                
//            }
//            for(city in cities) {
//                console.log(city[0]);
//            }
        });
    }]);
