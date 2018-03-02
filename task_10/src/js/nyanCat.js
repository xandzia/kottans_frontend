export function placeNyanCat(elem) {
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
    elem.setAttribute("style", "-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;");  
};
