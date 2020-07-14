// grab an element for button container

const playBtn = document.querySelector('.button_container');

// call handler for button click

playBtn.addEventListener('click',getPicture);

// grabing image area and store it to new variable
// grabing every button click and store it to new variable
// grabing word area and assign it to new variable
// grabing card(means DIV which holds both image and word DIVs) area and assign it to new variable

    
let imageArea = document.getElementById('cardImg');
let  eventBtn= event.target.id;
let wordA =document.querySelector('.word');
let cardA =document.querySelector('.word_card_container');


// 