const userInput = document.getElementById('user-input');
let latitude = '';
let longitude = '';
let cityG = '';

function activatePlacesSearch(){
    let autocomplete = new google.maps.places.Autocomplete(userInput);   
};

function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getCityLatLon();
  }
};

function getCityLatLon(){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${userInput.value}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            cityG = results[0].address_components[0].long_name;
            
            getWeather();
        } else {
            console.log("Something got wrong " + status);
        }
    });
};

function getWeather() {
    const apiPath = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
    const appId = '&APPID=ceae2108078d09147f9148fbef299e0f';
    
    let url = `${apiPath}${latitude}&lon=${longitude}${appId}`;
    sendRequest(url);    
};

function sendRequest(url){
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const main = {};
      main.city = json.city.name;
      main.day = json.list[0].dt_txt;
      main.temp = json.list[0].main.temp;
      main.description = json.list[0].weather[0].description;
      main.icon = json.list[0].weather[0].icon;
          
      putIntoHtml(main);
      console.log(json);
      console.log(main);
  })
};

function putIntoHtml(main) {
    const city = document.getElementById('city');
    const cityGoo = document.getElementById('cityG');

    city.innerHTML = main.city;
    cityGoo.innerHTML = cityG;
};