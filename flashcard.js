// grab an element for button container

const playBtn = document.querySelector('.button_container');

// call handler for button click

playBtn.addEventListener('click',getPicture);

// grabing image area and store it to new variable
// grabing every button click and store it to new variable
// grabing word area and assign it to new variable
// grabing card(means DIV which holds both image and word DIVs) area and assign it to new variable

    // and then
// if button clicked assign image and word to the card area
// if button click give card area background color and border size for the word to have clear visibility
// and to make it look good



function getPicture(event){ 

let imageArea = document.getElementById('cardImg');
let  eventBtn= event.target.id;
let wordA =document.querySelector('.word');
let cardA =document.querySelector('.word_card_container');





if(eventBtn){
    
    cardA.style.background ="white";
    cardA.style.border ="10px  solid" ;
    cardA.style.borderColor ="white";
    cardA.style.borderRadius ="5px";

}




if(eventBtn ==='btnA'){

    imageArea.src ='./images/apple.jpg';
    wordA.innerText ='Apple';
    
}

if(eventBtn ==='btnB'){
    imageArea.src ='./images/bird.jpg';
    wordA.innerText ='Bird';
}

if(eventBtn==='btnC'){
imageArea.src ='./images/cat.jpg';
    wordA.innerText ='Cat';
}


if(eventBtn==='btnD'){
imageArea.src ='./images/dog.png';
    wordA.innerText ='Dog';
}



if(eventBtn==='btnE'){
    imageArea.src ='./images/elephant.jpg';
    wordA.innerText ='Elephant';
}

if(eventBtn==='btnF'){
    imageArea.src ='./images/fish.jpg';
    wordA.innerText ='Fish';
}

if(eventBtn==='btnG'){
    imageArea.src ='./images/goat.jpg';
    wordA.innerText ='Goat';
}

if(eventBtn==='btnH'){
    imageArea.src ='./images/horse.jpg';
    wordA.innerText ='Horse';
}



if(eventBtn==='btnI'){
    imageArea.src ='./images/ice-cream.jpg';
    wordA.innerText ='Ice Cream';
}

if(eventBtn==='btnJ'){
    imageArea.src ='./images/jam.jpg';
    wordA.innerText ='Jam';
}


if(eventBtn==='btnK'){
    imageArea.src ='./images/kangaroo.jpg';
    wordA.innerText ='Kangaroo';
}

if(eventBtn==='btnL'){
    imageArea.src ='./images/lion.jpg';
    wordA.innerText ='Lion';
}

if(eventBtn==='btnM'){
    imageArea.src ='./images/monkey.jpg';
    wordA.innerText ='Monkey';

}

if(eventBtn === 'btnN'){
    imageArea.src ='./images/nest.jpg';
    wordA.innerText = 'Nest';
}


if(eventBtn==='btnO'){
imageArea.src ='./images/orange.jpg';
    wordA.innerText ='Orange';
}


if(eventBtn==='btnP'){
imageArea.src ='./images/panda.jpg';
    wordA.innerText ='Panda';
}

if(eventBtn==='btnQ'){
    imageArea.src ='./images/quail.jpg';
    wordA.innerText ='Quail';
}

if(eventBtn==='btnR'){
    imageArea.src ='./images/rabbit.jpg';
    wordA.innerText ='Rabbit';
}

if(eventBtn==='btnS'){
    imageArea.src ='./images/star.jpg';
    wordA.innerText ='Star';
}


if(eventBtn==='btnT'){
    imageArea.src ='./images/tiger.jpg';
    wordA.innerText ='Tiger';
}

if(eventBtn==='btnU'){
    imageArea.src ='./images/umbrella.jpg';
    wordA.innerText ='Umbrella';
}

if(eventBtn==='btnV'){
    imageArea.src ='./images/violin.jpg';
    wordA.innerText ='Violin';
}

if(eventBtn==='btnW'){
    imageArea.src ='./images/watch.jpg';
    wordA.innerText ='Watch';
}


if(eventBtn==='btnX'){
    imageArea.src ='./images/xenia.jpg';
    wordA.innerText ='Xenia';
}


if(eventBtn==='btnY'){
    imageArea.src ='./images/yak.jpg';
    wordA.innerText ='Yak';
}

if(eventBtn==='btnZ'){
    imageArea.src ='./images/zebra.jpg';
    wordA.innerText ='Zebra';
}

}
    



