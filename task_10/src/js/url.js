import {getCityLatLon} from './search';

export const getCityFromUrl = (userInput) => {
    let url = new URL(window.location.href);
    if (url.search.startsWith('?=')) {
        userInput.value = url.search.slice(2);
        //userInput.value = userInput.value.replace('%20', ' ');
        userInput.value = decodeURIComponent(userInput.value);
        console.log(userInput.value);
        getCityLatLon();
        return userInput.value;
    }
};

export const populateCityToUrl = (city) => {
    window.history.pushState(null, null, `?=${city}`);
}
