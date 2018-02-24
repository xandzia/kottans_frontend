import { getIcon, changeDateTime } from '../utils/lib';

const oneDay = document.querySelector('.one-day');

export function todayForecast(json) {
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
    
    main.icon = getIcon(main.icon);
    oneDay.innerHTML = `<div class="btn-group">
                            <button class="f">F</button>
                            <button class="c">C</button>
                        </div>
                        <h2 class="city">${main.city}</h2>
                        <div class="centre">
                            <span class="temp">${main.temp}</span><sup>o</sup><span class="cf">C</span>
                            <img class="icon" src="src/img/icons/big/${main.icon}.svg" alt="${main.icon}">
                        </div>
                        <p class="discriptions">
                            <time class="d-time" datatime="${main.day}">${changeDateTime(main.day)}</time>   
                            <span class="desc">${main.description}</span>
                            <span class="humid">${main.humidity}%</span>
                        </p>`;
//    populateCityToUrl(main.city);
//    swapCF();
//    star.onclick = function(){addToFavourite(main.city)};
};
