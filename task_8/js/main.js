//images array
var imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

//copy array, random
imagesArray = imagesArray.concat(imagesArray);


//create 12 cards
function newGame() {
    flippedImg = 0;
    var output = '';
    
    imagesArray.sort(function() {
        return 0.5 - Math.random()
    });
    
    for(var i = 0; i<12; i++) {

        var wrap = document.getElementsByClassName('wrapper')[0];
        var fig = document.createElement('div');
        fig.className = 'container';


    //    fig.innerHTML = '<div class="card"><figure class="front"></figure><figure class="back"><img src="img/'+img+'"></figure></div>';

        //********test part******
            fig.innerHTML = '<div class="card" onclick="flip(this, '+i+')"><figure id="'+i+'" class="back"><img src="img/'+imagesArray[i]+'"></figure><figure class="front"><img src="img/front_v5.png"></figure></div>';
        //wrap.appendChild;

        //********end test part*****

        wrap.appendChild(fig);
        console.log(i);
    }
    
}

//animate card
function flip(card, val) {
    event.currentTarget.setAttribute('style', 'transform: rotateY(180deg);');
    
    //var card = event.currentTarget;
    if (values.length == 0) {
        //card.style.background = '#ccc';
        values.push(val);
        numberOfImgs.push(card.id);
    }
    
}

//hide when the same image
var values = [];
var numberOfImgs = []; //ids
var flippedImg = 0;

newGame();