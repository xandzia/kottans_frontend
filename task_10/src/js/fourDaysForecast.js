import { days } from './selectors';
import { changeDateTime } from './lib';
import { getIcon } from './lib';

export function putHtmlDays(json) {
    for (let i = 1; i<5; i++) {
        let nextDay = document.createElement('div');
        let datetime = json.data[i].datetime;
        let rename = changeDateTime(datetime);
        let icon = getIcon(json.data[i].weather.code);
        nextDay.className = 'a-day';
        nextDay.innerHTML = `<time datatime="${datetime}">${rename}</time>
                             <img src="src/img/icons/big/${icon}.svg" alt="${icon}" class="icon">
                             <div><span class="temp">${json.data[i].temp}</span><sup>o</sup><span class="cf">C</span></div>`;
        days.appendChild(nextDay);
    }
};
