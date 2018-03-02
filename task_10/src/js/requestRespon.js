import { putHtmlToday } from './aDayWeather';
import { putHtmlDays } from './fourDaysForecast';
import { swapCF } from './swapFC';
import { addToFavourite } from './favourite';
import { star } from './selectors';
import { oneDay } from './selectors';
import { nyanCat } from './selectors';
import { days } from './selectors';
import { getCityLatLon } from './search';

export function getUrl(latitude,longitude) {
    const apiPath = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const appKey = '&key=ca6bb30119264fe2b2608a31b5c79d8e';
    
    let url = `${apiPath}?lat=${latitude}&lon=${longitude}${appKey}`;
    sendRequest(url); 
};

function sendRequest(url){
  fetch(url)
    .then(response => response.json())
    .then(json => {
      createMainJson(json);
  })
};

function createMainJson(json) {
    const main = {};
    main.city = json.city_name;
    main.day = json.data[0].datetime;
    main.temp = json.data[0].temp;
    main.tempFeel = json.data[0].app_temp;
    main.description = json.data[0].weather.description;
    main.humidity = json.data[0].rh;
    main.icon = json.data[0].weather.code;
    main.lat = json.lat;
    main.lon = json.lon;
    
    console.log(main);
    putHtmlToday(main);
    putHtmlDays(json);
    swapCF();
    star.onclick = function(){addToFavourite(main.city)};
};

export function getWeather(){
    getCityLatLon();
    clearHtml(oneDay);
    clearHtml(days);
    star.setAttribute('data-favourite', false);
    clearHtml(nyanCat);
    clearStyle(nyanCat, "style", "-webkit-animation: animateC 8s linear; animation-fill-mode: forwards;");  
};

function clearHtml(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};

function clearStyle(elem, style) {
    elem.removeAttribute(style);    
};
