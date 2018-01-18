const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=22cc656f6993eccb9585894f35de1451'; //specified which api, which city & your api key

window.addEventListener('load', function(){
});

function getWeatherData() {
  console.log(this.responseText); // Check your dev tools in the browser and you can see the Hash.
}

const connection_open_weather_map = new XMLHttpRequest(); // make XML request

connection_open_weather_map.addEventListener("load", getWeatherData); //on load run getWeatherData function

connection_open_weather_map.open("GET", weather_api);
connection_open_weather_map.send();
