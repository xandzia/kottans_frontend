import { daysForecast } from '../components/DaysForecast';
import { todayForecast } from '../components/TodayForecast';
import { placeNyanCat, nyanCat } from './error';

const apiPath = 'https://api.weatherbit.io/v2.0/forecast/daily';
const appKey = '&key=ca6bb30119264fe2b2608a31b5c79d8e';

export function getWeather(latitude, longitude) {
    let url = `${apiPath}?lat=${latitude}&lon=${longitude}${appKey}`;
    return fetch(url)
        .then(response => {
            return response.json()
        }).catch(e => {
            console.log(e);
        });
};

export const getCityFromUrl = (userInput) => {
    let url = new URL(window.location.href);
    if (url.search.startsWith('?=')) {
        userInput.value = url.search.slice(2);
        userInput.value = decodeURIComponent(userInput.value);
        getCityLatLon();
        return userInput.value;
    }
};

function clearHtml(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};

export function getCityLatLon(city) {
    return new Promise((resolve, reject) => {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({
            address: `${city}`
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                let latitude = results[0].geometry.location.lat();
                let longitude = results[0].geometry.location.lng();
                resolve([latitude, longitude]);
            } else {
                console.log("Something got wrong " + status);
                reject(nyanCat)
            }
        });

    })
};
