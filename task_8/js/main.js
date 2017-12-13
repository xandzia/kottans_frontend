//images array
var imagesArray = ['applejack.png', 'boss.png', 'flattershai.png', 'pinkie.png', 'rainbawdash.png', 'rarity.png'];

//copy array, random
imagesArray = imagesArray.concat(imagesArray);
imagesArray.sort(function() {
    return 0.5 - Math.random()     
});


// create 1 card in html
function createCards(img) {
    
    var wrap = document.getElementsByClassName('wrapper')[0];
    var fig = document.createElement('div');
    fig.className = 'container';
    
    
//    fig.innerHTML = '<div class="card"><figure class="front"></figure><figure class="back"><img src="img/'+img+'"></figure></div>';
    
    //********test part******
    
        fig.innerHTML = '<div class="card"><figure class="front"><img src="img/'+img+'"></figure></div>';
    //wrap.appendChild;
    
    //********end test part*****
    
    wrap.appendChild(fig);
};

//create 12 cards
for(var i = 0; i<12; i++) {
    createCards(imagesArray[i]);
    console.log(i);
}

