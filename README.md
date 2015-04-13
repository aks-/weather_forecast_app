### Weather Forecast App
This app uses http://openweathermap.org/ api to fetch the data

This is web-app created in angular.js for the demonstration purpose.

#### How to run
You can run this app with any server, you could use something like python
server

`python -m SimpleHTTPServer 8000`

#### Usage
* Start the app on localhost:8000 if you are running server on port 8000
* It uses geolocation services to find the location, allow browser to find location by clicking 'Allow'.
* It will show you the weather forcast for 14 days (You can change the count of days by going to services/WeatherService.js and change it on line 3.
* On entering the new city names it will open the new tab with the weather data without reloading the page.
