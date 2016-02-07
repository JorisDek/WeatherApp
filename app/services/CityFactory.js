angular.module('weatherApp')
    .factory('CityFactory', function($http) { 
        return {
            list: function(callback){  
              $http.get('services/city.list.json').success(callback);
            }
          
        };   
});

