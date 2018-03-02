import { oneDay } from './selectors';
import { getIcon, changeDateTime } from './lib';
import { populateCityToUrl } from './url';

export function putHtmlToday(main) {
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
    populateCityToUrl(main.city);
};
