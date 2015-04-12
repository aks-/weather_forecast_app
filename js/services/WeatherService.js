app.factory('WeatherService', ['$http', function($http) {
    var appId = "34dca9502c68e2c0c9c9995d245cc995";
    var count = 14;

    return {
        getCityWeatherReport : function(cityName,success) {
            var url = "http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&";
            url += "q="+cityName+"&";
            url += "cnt="+count+"&";
            url += "APPID="+appId;

            function callOpenWeatherMap(success) {
                $http.get(url).success(success);
            }

            callOpenWeatherMap(success);
        },
        getCurrnetCityName : function(callback) {
            console.log("getCurrnetCityName");
            var geocoder = new google.maps.Geocoder();
            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });

            function success(position) {
                console.log("getCurrnetCityName: success");

                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var latLng = new google.maps.LatLng(lat, lng);

                geocoder.geocode({
                    'latLng': latLng
                }, function(results, status) {
                    console.log("getCurrnetCityName: result");
                    //console.log(results);
                    if (status == google.maps.GeocoderStatus.OK) {
                        var splittedResults = results[0].formatted_address.split(",");
                        callback(splittedResults[splittedResults.length - 3]);
                    }
                });
            }

            function error(err){
                console.log("getCurrnetCityName : error");
                console.log(err);
            }
        }
    }
}]);
