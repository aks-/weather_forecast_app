app.controller('WeatherController', ['$scope', '$timeout', 'WeatherService', function($scope, $timeout, WeatherService) {
    $scope.cityName = WeatherService.success(function(data) {
        return data.city;
    });
}]);
