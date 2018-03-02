import { userInput } from './selectors';
import { star } from './selectors';
import { favourit } from './selectors';
import { getWeather } from './requestRespon';
import { saveLocalStorage } from './localStorage';


export let favourireList = [];

export function ShowFavouriteCity(elem) {
    elem.onclick = (event) => {
        let target = event.target.outerText;
        userInput.value = target;
        getWeather();
        star.setAttribute('data-favourite', true);
    };
};

export function showHideStar(elem) {
    elem.classList.add('change');
    setTimeout(function() {
        elem.classList.remove('change');
    }, 3000)
};

function removeFavourite(arr) {
    let what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
};

export function addToFavourite(obj) {
    if( star.dataset.favourite === 'true') {
        star.setAttribute('data-favourite', false);
        let delCity = document.getElementById(obj);
        delCity.remove();
        removeFavourite(favourireList, obj);
        saveLocalStorage(favourireList);
    } else {
        let list = document.createElement('li');
        list.setAttribute('id', obj);
        star.setAttribute('data-favourite', true);
        list.innerHTML = `<a>${obj}</a>`;
        favourit.appendChild(list);
        showHideStar(favourit);
        favourireList.push(obj);
        saveLocalStorage(favourireList);
    };
};
