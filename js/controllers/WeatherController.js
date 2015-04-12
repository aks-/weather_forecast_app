app.controller('WeatherController', ['$scope', '$timeout','WeatherService',
        function($scope, $timeout, WeatherService) {

        $scope.cityName = "loading...";
        $scope.places = {};
        $scope.forecast = {};
        $scope.unit = "°C";
        $scope.currentTabId = 0;
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        WeatherService.getCurrnetCityName(function(cityname) {
                $scope.cityName = cityname;
                getForecast();
        });

        $scope.onKeyup = function(event) {
                if(event.keyCode == 13){
                        getForecast();
                }
        };

        $scope.onPlaceClick = function(tabId) {
                $scope.currentTabId = tabId;
        }

        $scope.onPlaceDelete = function(tabId) {
                delete $scope.places[tabId];
                if( $scope.places != null && $scope.currentTabId == tabId) {
                        //console.log(Object.keys($scope.places));
                        $scope.currentTabId = Object.keys($scope.places)[0];;//$scope.places[0];
                }
        }

        function getForecast() {
                WeatherService.getCityWeatherReport($scope.cityName,function(data) {
                        console.log(data);
                        if(data.cod != 404)
                        $timeout(function() {
                                angular.forEach(data.list,function(value,key) {
                                        var theDate = new Date(value.dt * 1000);
                                        dateString = new Date(theDate.toGMTString());
                                        value.dt = dateString.getDate()+" "+months[dateString.getMonth()];
                                });
                                //$scope.forecast = data;
                                $scope.cityName = "";
                                $scope.currentTabId = new Date().getTime()+Math.floor((Math.random() * 100) + 1);
                                $scope.places[$scope.currentTabId] = data;
                        });
                });
        }
}]);
