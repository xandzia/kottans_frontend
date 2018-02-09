//selectors
const userInput = document.getElementById('user-input');
const oneDay = document.querySelector('.one-day');
const nyanCat = document.querySelector('.wrapper-cat');
//const city = document.getElementById('city');
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
    clearHtml(oneDay);
    clearHtml(nyanCat);
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
            nyanCat.innerHTML = `<div class='rainbow'>
                                    <span></span>
                                </div>
                                <div class='nyan-cat'>
                                    <span class="error">not found 404</span>
                                    <div class='feet'></div>
                                    <div class='tail'>
                                        <span></span>
                                    </div>
                                    <div class='body'></div>
                                    <div class='head'></div>
                                </div>`;
            nyanCat.setAttribute("style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");
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
    oneDay.innerHTML = `<h2 class="city">${main.city}</h2>
                        <div class="centre">
                            <span class="temp">${main.temp}<sup>o</sup></span>
                            <img class="icon" src="img/icons/big/cloud.png" alt="">
                        </div>
                        <p class="discriptions">
                            <time class="d-time" datatime="${main.day}">${main.day}</time>                
                            <span class="humid">${main.description} ${main.humidity}%</span>
                        </p>`;
};

function clearHtml(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    elem.removeAttribute("style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");
};
