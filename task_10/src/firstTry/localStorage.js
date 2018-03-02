import { star } from './selectors';
import { favourit } from './selectors';
import { showHideStar } from './favourite';

export function saveLocalStorage(favourireList){
    let fList = JSON.stringify(favourireList);
    localStorage.setItem('favourireList', fList);
};

export function getLocalStorage(favourireList) {
    let fList = localStorage.getItem('favourireList');
    favourireList = JSON.parse(fList);
    if (!favourireList) {
        favourireList = [];
    } else {
        for (let i =0; i<favourireList.length; i++) {
            let list = document.createElement('li');
            list.setAttribute('id', favourireList[i]);
            star.setAttribute('data-favourite', true);
            list.innerHTML = `<a>${favourireList[i]}</a>`;
            favourit.appendChild(list);
            showHideStar(favourit);           
        }
    }
};
