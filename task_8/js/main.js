//images array
var imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

var flipped = [];
var numberOfImgs = []; //ids
var flippedImg = 0;

//copy array, random
imagesArray = imagesArray.concat(imagesArray);


//create 12 cards
function newGame() {
    flippedImg = 0;
    
    imagesArray.sort(function() {
        return 0.5 - Math.random()
    });
    
    for(var i = 0; i<12; i++) {

        var wrap = document.getElementsByClassName('wrapper')[0];
        var fig = document.createElement('div');
        fig.className = 'container';


    //    fig.innerHTML = '<div class="card"><figure class="front"></figure><figure class="back"><img src="img/'+img+'"></figure></div>';

        //********test part******
            fig.innerHTML = '<div id="'+i+'" class="card" onclick="flip(this, \''+imagesArray[i]+'\')"><figure class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';
        //wrap.appendChild;

        //********end test part*****

        wrap.appendChild(fig);
    }
    
}

//action by click
function flip(card, val) {
    //animate card
    event.currentTarget.setAttribute('style', 'transform: rotateY(180deg);');
    
    if ( flipped.length < 2 ) {
        if ( flipped.length === 0 ) {
            //add flipped card to array flipped 
            flipped.push(val);
            numberOfImgs.push(card.id);
        } else if ( flipped.length === 1 ) {
            flipped.push(val);
            numberOfImgs.push(card.id);
                    var card1 = document.getElementById(numberOfImgs[0]);
                    var card2 = document.getElementById(numberOfImgs[1]);
            if ( flipped[0] === flipped[1] ) {
                setTimeout(function(){
                    card1.setAttribute('style', 'visibility: hidden;');
                    card2.setAttribute('style', 'visibility: hidden;')
                }, 500);
                flippedImg = flippedImg + 2;
                //empty arrays
                flipped = [];
                numberOfImgs = [];
                if ( flippedImg === imagesArray.length ) {
                    setTimeout(function (){
                       var remove = document.getElementsByClassName('container');
                        for (var i = remove.length; i--; ) {
                           remove[i].remove();
                        }
                        alert('You won');
                        newGame();
                    }, 700);
                }
            } else {
                function backAgain() {
                //no match is made
                    card1.setAttribute('style', 'transform: rotateY(0deg);');
                    card2.setAttribute('style', 'transform: rotateY(0deg);');
                    //clear arrays
                    flipped = [];
                    numberOfImgs = [];
                }
                setTimeout(backAgain, 500);
            }
        }
    }  
}

newGame();