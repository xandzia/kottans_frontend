import { daysForecast } from '../components/DaysForecast';
import { todayForecast } from '../components/TodayForecast';
import { placeNyanCat, nyanCat } from './error';

function getWeather(latitude,longitude) {
    const apiPath = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const appKey = '&key=ca6bb30119264fe2b2608a31b5c79d8e';
    let url = `${apiPath}?lat=${latitude}&lon=${longitude}${appKey}`;
    
    return fetch(url)
        .then(response => response.json());
};

export const getCityFromUrl = (userInput) => {
    let url = new URL(window.location.href);
    if (url.search.startsWith('?=')) {
        userInput.value = url.search.slice(2);
        userInput.value = decodeURIComponent(userInput.value);
        console.log(userInput.value);
        getCityLatLon();
        return userInput.value;
    }
};

const populateCityToUrl = (city) => {
    window.history.pushState(null, null, `?=${city}`);
}

export function getCityLatLon(city){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${city}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();
            
            getWeather(latitude, longitude).then((weather) => {
                console.log(2, this);
                todayForecast(weather);
                daysForecast(weather);
                
            });
        } else {
            console.log("Something got wrong " + status);
            
            placeNyanCat(nyanCat);
        }
    });
};
