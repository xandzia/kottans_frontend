export const nyanCat = document.querySelector('.wrapper-cat');
const wrap = document.querySelector('.wrapper');
const day = document.querySelector('.one-day');
const days = document.querySelector('.another-days');

export function placeNyanCat(elem) {
    day.innerHTML = '';
    days.innerHTML = '';
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
    elem.setAttribute("style", "-webkit-animation: animateC 7s linear; animation-fill-mode: forwards;");
    wrap.setAttribute("style", "height: 100vh;");
    setTimeout(function cleanCat() {
        elem.innerHTML = '';
        elem.removeAttribute("style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");
        wrap.removeAttribute("style", "height: 100vh;");
    }, 7000);
}