const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=22cc656f6993eccb9585894f35de1451'; //specified which api, which city & your api key

window.addEventListener('load', function(){
});

function getWeatherData() {
  const data = (JSON.parse(this.responseText)); //Parsing the response into a JSON format.

//const data = (this.responseText); //just getting the hash response, check your dev.tools.

  console.dir(data); // Check your dev tools in the browser and you can see the object.
  const sunrise = data.sys.sunrise //entering the sys key and the the sunrise key
  const sunset = data.sys.sunset
}

const connection_open_weather_map = new XMLHttpRequest(); // make XML request

connection_open_weather_map.addEventListener("load", getWeatherData); //make an xml request and on load run getWeatherData function

connection_open_weather_map.open("GET", weather_api); //open an xmlrequest that is GET the const which specified the api
connection_open_weather_map.send(); //The XMLHttpRequest.send() method sends the request.

connection_open_weather_map
