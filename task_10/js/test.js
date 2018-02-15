const userInput = document.getElementById('user-input');
const oneDay = document.querySelector('.one-day');
const days = document.querySelector('.enother-days');
const nyanCat = document.querySelector('.wrapper-cat');

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
    clearStyle(nyanCat, "style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");
  }
};

function getCityLatLon(){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${userInput.value}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
//            console.log(results);
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            
            getUrl();
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

function getUrl() {
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
    
      console.log(main);
      putHtmlToday(main);
      putHtmlDays(json);
};

function putHtmlToday(main) {
    oneDay.innerHTML = `<div class="btn-group">
                            <button class="f">F</button>
                            <button class="c">C</button>
                        </div>
                        <h2 class="city">${main.city}</h2>
                        <div class="centre">
                            <span class="temp">${main.temp}<sup>o</sup>C</span>
                            <img class="icon" src="img/icons/big/cloud.png" alt="">
                        </div>
                        <p class="discriptions">
                            <time class="d-time" datatime="${main.day}">${changeDateTime(main.day)}</time>   
                            <span class="humid">${main.description}  ${main.humidity}%</span>
                        </p>`;
};

function putHtmlDays(json) {
    for (let i = 1; i<5; i++) {
        let nextDay = document.createElement('div');
        let datetime = json.data[i].datetime;
        let rename = changeDateTime(datetime);
        console.log(rename);
        nextDay.className = 'a-day';
        nextDay.innerHTML = `<time datatime="${datetime}">${rename}</time>
                             <img src="img/icons/big/cloud.png" alt="" class="icon">
                             <span class="temp-">${json.data[i].temp}&deg;C</span>`;
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
    switch(iconCode) {
        case ('200'||'201'||'202'): icon = stormRain;
            break;
        default: icon = sun;
            break;
    }
    return `<img class="icon" src="img/icons/big/${icon}.png" alt="${icon}">`;
};



//const get = url => fetch(url).then(res => {
//    if (res.ok) {
//        return res.json()
//    }
//    throw new Error();
//})
//const renderUser = userData => {
//    const li = document.createElement('li');
//    li.
//}
