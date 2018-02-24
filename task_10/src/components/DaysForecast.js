import { getIcon } from '../utils/lib';
import { changeDateTime } from '../utils/lib';

const days = document.querySelector('.another-days');


export function daysForecast(json) {
    let arr = [];
    for (let i = 1; i<5; i++) {
        let datetime = json.data[i].datetime;
        let rename = changeDateTime(datetime);
        let icon = getIcon(json.data[i].weather.code);
        arr += `<div class="a-day">
                <time datatime="${datetime}">${rename}</time>
                <img src="src/img/icons/big/${icon}.svg" alt="${icon}" class="icon">
                <div><span class="temp">${json.data[i].temp}</span><sup>o</sup><span class="cf">C</span></div>
                </div>`;
    };
    days.innerHTML = arr;
};
