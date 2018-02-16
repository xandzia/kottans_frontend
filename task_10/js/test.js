'use strict';
const userInput = document.getElementById('user-input');
const oneDay = document.querySelector('.one-day');
const days = document.querySelector('.another-days');
const star = document.querySelector('.favourite');
const favourit = document.getElementById('navigation1');
const nyanCat = document.querySelector('.wrapper-cat');
const favourireList = [];

function activatePlacesSearch(){
    let autocomplete = new google.maps.places.Autocomplete(userInput);
};

function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getWeather();
  }
};

function getWeather(){
    getCityLatLon();
    clearHtml(oneDay);
    clearHtml(days);
    star.setAttribute('data-favourite', false);
    clearHtml(nyanCat);
    clearStyle(nyanCat, "style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");  
};

function getCityLatLon(){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${userInput.value}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();
            
            getUrl(latitude, longitude);
        } else {
            console.log("Something got wrong " + status);
            
            placeNyanCat(nyanCat);
        }
    });
};

function placeNyanCat(elem) {
    elem.innerHTML = `<div class='rainbow'>
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
    elem.setAttribute("style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");  
};

function getUrl(latitude,longitude) {
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
      console.log(json);
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
    star.onclick = function(){addToFavourite(main)};
};

function putHtmlToday(main) {
    main.icon = getIcon(main.icon);
    oneDay.innerHTML = `<div class="btn-group">
                            <button class="f">F</button>
                            <button class="c">C</button>
                        </div>
                        <h2 class="city">${main.city}</h2>
                        <div class="centre">
                            <span class="temp">${main.temp}</span><sup>o</sup><span class="cf">C</span>
                            <img class="icon" src="img/icons/big/${main.icon}.svg" alt="${main.icon}">
                        </div>
                        <p class="discriptions">
                            <time class="d-time" datatime="${main.day}">${changeDateTime(main.day)}</time>   
                            <span class="desc">${main.description}</span>
                            <span class="humid">${main.humidity}%</span>
                        </p>`;
    populateCityToUrl(main.city);
};

const populateCityToUrl = (city) => {
  if (history.pushState) { 
    var newurl = window.location.origin + window.location.pathname + "?="+ city;;
    window.history.pushState({ path:newurl }, '', newurl );
  } 
}


function putHtmlDays(json) {
    for (let i = 1; i<5; i++) {
        let nextDay = document.createElement('div');
        let datetime = json.data[i].datetime;
        let rename = changeDateTime(datetime);
        let icon = getIcon(json.data[i].weather.code);
        nextDay.className = 'a-day';
        nextDay.innerHTML = `<time datatime="${datetime}">${rename}</time>
                             <img src="img/icons/big/${icon}.svg" alt="${icon}" class="icon">
                             <div><span class="temp">${json.data[i].temp}</span><sup>o</sup><span class="cf">C</span></div>`;
        days.appendChild(nextDay);
    }
};

function changeDateTime(date) {
    date = date.split('-');
    let mon = date[1];
    switch(mon) {
        case '01': mon = 'Jan ';
            break;
        case '02': mon = 'Feb ';
            break;
        case '03': mon = 'Mar ';
            break;
        case '04': mon = 'Apr ';
            break;
        case '05': mon = 'May ';
            break;
        case '06': mon = 'Jun ';
            break;
        case '07': mon = 'Jul ';
            break;
        case '08': mon = 'Aug ';
            break;
        case '09': mon = 'Sept ';
            break;
        case '10': mon = 'Oct ';
            break;
        case '11': mon = 'Nov ';
            break;
        case '12': mon = 'Dec ';
            break;
    }
    date = mon+date[2];
    return date;
};

function clearHtml(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};

function clearStyle(elem, style) {
    elem.removeAttribute(style);    
};

function addToFavourite(obj) {
    let city = document.querySelector('.city');
    city = city.outerText;
    let list = document.createElement('li');
    list.innerHTML = `<a>${city}</a>`;
    favourit.appendChild(list);
    star.setAttribute('data-favourite', true);
    showHideStar(favourit);
    favourireList.push(obj);
};

function showHideStar(elem) {
    elem.classList.add('change');
    setTimeout(function() {
        elem.classList.remove('change');
    }, 3000)
};

function ShowFavouriteCity(elem) {
    elem.onclick = (event) => {
        let target = event.target.outerText;
        userInput.value = target;
        getWeather();
        star.setAttribute('data-favourite', true);
    };
};
new ShowFavouriteCity(favourit);

function swapCF() {
    const f = document.querySelector('.f');
    const c = document.querySelector('.c');
    const t = document.querySelectorAll('.temp');
    const cf = document.querySelectorAll('.cf');
    c.disabled = true;

    f.onclick = () => {
        for (let i=0; i<t.length; i++) {
            let temp = parseFloat(t[i].innerHTML);
            temp = temp * 1.8 + 32;
            t[i].textContent = temp;
            cf[i].textContent = 'F';
        };
        f.disabled = true;
        c.disabled = false;
    };
    c.onclick = () => {
        for (let i=0; i<t.length; i++) {
            let temp = parseFloat(t[i].innerHTML);
            temp = (temp - 32) * (5/9);
            t[i].textContent = temp.toFixed(1);
            cf[i].textContent = 'C';
        };
        c.disabled = true;
        f.disabled = false;
    }
};

function getIcon(iconCode) {
    const icons = {
        cloud: 'cloud',
        cloudy: 'cloudy',
        doubleCloudy: 'double-cloudy',
        doubleRain: 'double-rain',
        rain: 'rain',
        rainbow: 'rainbow',
        snowflake: 'snowflake',
        snowy: 'snowy',
        storm: 'storm',
        stormRain: 'storm-rain',
        sun: 'sun'
    };
    let icon='';
    iconCode = Number(iconCode);
    if (iconCode >= 200 && iconCode <= 202) {
        icon = icons.stormRain;
    } else if (iconCode >= 230 && iconCode <= 233) {
        icon = icons.storm;
    } else if (iconCode >=300 && iconCode <=500 || iconCode === 521 || iconCode === 900) {
        icon = icons.rain;
    } else if (iconCode >= 501 && iconCode <= 522) {
        icon = icons.doubleRain;
    } else if (iconCode >= 600 && iconCode <= 623) {
        icon = icons.snowy;
    } else if (iconCode === 611 || iconCode === 612) {
        icon = icons.cloud;
    } else if (iconCode >= 700 && iconCode <= 751 || iconCode >=801 && iconCode <= 803) {
        icon = icons.cloudy;
    } else if (iconCode === 804) {
        icon = icons.doubleCloudy;
    } else {
        icon = icons.sun;
        }
    return icon;
};

