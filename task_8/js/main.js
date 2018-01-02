let imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

let flipped = [];
let numberOfImgs = []; //ids
let flippedImg = 0;

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
        fig.innerHTML = '<div id="'+i+'" class="card" onclick="flip(this, \''+imagesArray[i]+'\')"><figure class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';
//                                 
//                                 fig.innerHTML = '<div id="'+i+'" class="card"><figure class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';

        wrap.appendChild(fig);
    }
};
//action by click
function flip(card, val) {
    //animate card
    setTimeout(card.setAttribute('style', 'transform: rotateY(180deg);'), 400);
    //turn off "onclick"
    card.style.pointerEvents = 'none';
    
    if ( flipped.length < 2 ) {
        if ( flipped.length === 0 ) {
            //add flipped card to array 'flipped' 
            flipped.push(val);
            numberOfImgs.push(card.id);
        } else if ( flipped.length === 1 ) {
            flipped.push(val);
            numberOfImgs.push(card.id);
            
            const card1 = document.getElementById(numberOfImgs[0]);
            const card2 = document.getElementById(numberOfImgs[1]);
            
            if ( flipped[0] === flipped[1] && numberOfImgs[0] != numberOfImgs[1] ) {
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
                    
                        const remove = document.getElementsByClassName('container');
                        for (let i = remove.length; i--; ) {
                            remove[i].remove();
                        }
                    setTimeout( () => {
                            //alert('You won');
                        button.setAttribute('style', 'visibility: visible;');
                    }, 1000);
                }
            } else {
                function backAgain() {
                    //no match is made
                    card1.setAttribute('style', 'transform: rotateY(0deg);');
                    card2.setAttribute('style', 'transform: rotateY(0deg);');
                }
                //clear arrays
                flipped = [];
                numberOfImgs = [];
                setTimeout(backAgain, 400);
                //turn on "onclick"
                card.style.pointerEvents = 'auto';
            }
        }
    }  
}
newGame();

//for button "new game"
document.getElementById('but').addEventListener('click', newGame);