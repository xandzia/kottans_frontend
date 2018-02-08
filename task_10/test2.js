const userInput = document.getElementById('user-input');
let countryCode = '';
let cityName = '';
let latitude = '';
let longitude = '';

function activatePlacessearch(){
    let autocomplete = new google.maps.places.Autocomplete(userInput);   
};

function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getCityId();
  }
};

function getCityId(){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${userInput.value}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
//            countryCode = results[0].address_components[2].short_name;
//            cityName = results[0].address_components[0].short_name;
            
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            
            console.log(results);console.log(latitude);console.log(longitude);
            getWeatherByCityName();
        } else {
            console.log("Something got wrong " + status);
        }
    });
};

function getWeatherByCityName() {
    const apiPath = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const appId = '&APPID=ceae2108078d09147f9148fbef299e0f';
    let url = apiPath+cityName+','+countryCode+appId;
    
    const apiPathByLatLon = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
    let urlByLatLon = `${latitude}&lon=${longitude}${appId}`;
    sendRequest(url);    
};

function sendRequest(urlByLatLon){
  fetch(urlByLatLon)
    .then(response => response.json())
    .then(json => {
      const main = {};
//      main.city = json.city.name;
//      main.day = json.list[0].dt_txt;
      //main.temp = json.main.temp;
      //main.description = json.weather.description;
      //main.icon = json.weather.icon;
          
       //putIntoHtml(json);
      console.log(json);
      //console.log(main);
  })
};

//function putIntoHtml(weatherInfo) {
//    test.innerHTML = json;
//};