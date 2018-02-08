//selectors
const userInput = document.getElementById('user-input');
const oneDay = document.querySelector('.oneDay');
const city = document.getElementById('city');
//      day = document.querySelector('.day'),
//      temperature = document.querySelector('.temp'),
//      humidity =  document.querySelector('.humid'),
//      icon = document.querySelector('.icon');


let latitude = '';
let longitude = '';

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
            
            getWeather();
        } else {
            console.log("Something got wrong " + status);
        }
    });
};

function getWeather() {
    const apiPath = 'https://api.weatherbit.io/v2.0/forecast/3hourly';
    const appKey = '&key=ca6bb30119264fe2b2608a31b5c79d8e';
    
    let url = `${apiPath}?lat=${latitude}&lon=${longitude}${appKey}`;
    sendRequest(url);    
};

function sendRequest(url){
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const main = {};
      main.city = json.city_name;
      main.day = json.data[0].datetime;
      main.temp = json.data[0].temp;
      main.tempFeel = json.data[0].app_temp;
      main.description = json.data[0].weather.description;
      main.humidity = json.data[0].rh;
      main.icon = json.data[0].weather.icon;
          
      putIntoHtml(main);
      console.log(json);
      console.log(main);
  })
};

function putIntoHtml(main) {
    city.innerHTML = main.city;
    oneDay.innerHTML = `<h2 class="descrip">${main.description}</h2>
                        <time class="day" datatime="${main.day}">${main.day}</time>
                        <span class="temp">${main.temp}</span>
                        <span class="humid">${main.humidity}%</span>
                        <img class="icon" src="" alt="">`;
};