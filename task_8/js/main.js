// create 1 card in html
function createCards(img) {
    
    var wrap = document.getElementsByClassName('wrapper')[0];
    var fig = document.createElement('div');
    fig.className = 'container';
    
    
    fig.innerHTML = '<div class="card"><figure class="front"></figure><figure class="back">'+img+'</figure></div>';
    //wrap.appendChild;
    
    wrap.appendChild(fig);
};

//create 12cards
for(var i = 0; i<12; i++) {
    createCards(i);
    console.log(i);
}

//createCards();
//console.log(createCards())