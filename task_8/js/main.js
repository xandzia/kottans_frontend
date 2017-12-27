//images array
let imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

let flipped = [];
let numberOfImgs = []; //ids
let flippedImg = 0;

const button = document.getElementsByTagName('button')[0];

// Confetti Generator https://www.npmjs.com/package/confetti-js
const confettiSettings = { target: 'my-canvas' };
let confetti = new ConfettiGenerator(confettiSettings);

//copy array
imagesArray = imagesArray.concat(imagesArray);


//create 12 cards
(function newGame() {
    confetti.clear();
    
    button.setAttribute('style', 'display: none;');
    
    flippedImg = 0;
    
    imagesArray.sort(function() {
        return 0.5 - Math.random()
    });
    
    for(let i = 0; i<12; i++) {

        const wrap = document.getElementsByClassName('wrapper')[0];
        const fig = document.createElement('div');
        
        fig.className = 'container';
        fig.innerHTML = '<div id="'+i+'" class="card" onclick="flip(this, \''+imagesArray[i]+'\')"><figure class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';

        wrap.appendChild(fig);
    }
    
}());

//action by click
function flip(card, val) {
    //animate card
    setTimeout(event.currentTarget.setAttribute('style', 'transform: rotateY(180deg);'), 400);
    
    if ( flipped.length < 2 ) {
        if ( flipped.length === 0 ) {
            //add flipped card to array flipped 
            flipped.push(val);
            numberOfImgs.push(card.id);
        } else if ( flipped.length === 1 ) {
            flipped.push(val);
            numberOfImgs.push(card.id);
                    let card1 = document.getElementById(numberOfImgs[0]);
                    let card2 = document.getElementById(numberOfImgs[1]);
            if ( flipped[0] === flipped[1] ) {
                setTimeout( () => {
                    card1.setAttribute('style', 'visibility: hidden;');
                    card2.setAttribute('style', 'visibility: hidden;')
                }, 400);
                flippedImg = flippedImg + 2;
                //empty arrays
                flipped = [];
                numberOfImgs = [];
                if ( flippedImg === imagesArray.length ) {
                        confetti.render();
                    setTimeout( () => {
                       const remove = document.getElementsByClassName('container');
                        for (let i = remove.length; i--; ) {
                           remove[i].remove();
                        }
                        //alert('You won');
                        button.setAttribute('style', 'display: block;');
                    }, 1000);
                }
            } else {
                () => {
                    //no match is made
                    card1.setAttribute('style', 'transform: rotateY(0deg);');
                    card2.setAttribute('style', 'transform: rotateY(0deg);');
                }
                //clear arrays
                flipped = [];
                numberOfImgs = [];
                setTimeout(backAgain, 400);
            }
        }
    }  
}