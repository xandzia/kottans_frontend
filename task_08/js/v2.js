let imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

let flippedImg = 0;
let box;

const button = document.getElementById('but');

// Confetti Generator https://www.npmjs.com/package/confetti-js
const confettiSettings = { target: 'my-canvas' };
let confetti = new ConfettiGenerator(confettiSettings);

//copy array
imagesArray = imagesArray.concat(imagesArray);

//create 12 cards
function newGame() {
    confetti.clear();
    
    flippedImg = 0;
    
    imagesArray.sort(function() {
        return 0.5 - Math.random()
    });
    
    for(let i = 0; i<12; i++) {

        const wrap = document.getElementsByClassName('wrapper')[0];
        const fig = document.createElement('div');
        
        fig.className = 'container';
                                 
                                 fig.innerHTML = '<div id="'+i+'" class="card"><figure class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';

        wrap.appendChild(fig);
        fig.firstChild.addEventListener('click', click);
    }
};
//action by click
function click(event) {
    console.log(event.currentTarget)
    let card = event.currentTarget;
    flip(card);
    compare(card);
    //animate card
    //turn off "onclick"
    //card.style.pointerEvents = 'none';      
};

function hide(elem) {
    elem.setAttribute('style', 'visibility: hidden;');
}

function flip(card) {
    console.log("flip1");
    //card.style.transform = 'rotateY(180deg)';
    card.classList.add("flip");
}
function flip2(card) {
    console.log("flip2");
    card.classList.add("flip2");
    
}

function compare(elem) {
    //var img = document.getElementsByTagName('img')[0].src;
    if (box != undefined) {
        if (elem == box) {
            hide(elem);
            hide(box);
        } else {
            setTimeout(flip2(box), 2000);
            setTimeout(flip2(elem), 2000);
            box = undefined;
        }
        
    } else {
            box = elem;        
    }
};

newGame();

//for button "new game"
document.getElementById('but').addEventListener('click', newGame);