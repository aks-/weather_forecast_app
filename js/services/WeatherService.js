app.factory('WeatherService', ['$http', function($http) {
    var appId = "34dca9502c68e2c0c9c9995d245cc995";
    var count = 14;

    return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=" + cityName + "&cnt=" + count + "&APPID=" + appId).success(console.log("Success"))
}])
