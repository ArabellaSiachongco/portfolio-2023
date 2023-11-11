let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");
let waterfall = document.getElementById("waterfall"); 
let forest = document.getElementById("forest");
let dolphin = document.getElementById("dolphin");
let water = document.getElementById("water");
let header = document.getElementById("header");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    if (value < 500) {  
        text.style.top = 30 + value * -0.2 + '%';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * 2 + 'px';
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * -5 + 'px';
        btn.style.marginTop = value * 2 + 'px';
        rocks.style.top = value * -0.12 + 'px';
        waterfall.style.top = value * -0.01 + 'px';
        forest.style.bottom = value * 2 + 'px';
    }

    if (value < 6000) { 
        dolphin.style.bottom = 90 + value * 1 + 'px';
        dolphin.style.left = value * 1 + 'px';
        header.style.top = value * 0.5 + 'px';

    }
});

let starfish = document.getElementById("starfish");
let dolphin2 = document.getElementById("dolphin2");
let fish1 = document.getElementById("fish1");
let fish2 = document.getElementById("fish2");


window.addEventListener('scroll', function(){
    let value = window.scrollY;

        starfish.style.bottom = value * 0.2 + 'px';
        dolphin2.style.right = 90 + value * 1.8 + 'px';
        dolphin2.style.bottom = 50 + value * 0.8 + 'px';
        fish1.style.right = 90 + value * 0.8 + 'px';
        fish2.style.left = 90 + value * 0.8 + 'px';
    
});

// about me 

let heart1 = document.getElementById("heart1");
let heart2 = document.getElementById("heart2");
let aboutme = document.getElementById("aboutme");


window.addEventListener('scroll', function(){
    let value = window.scrollY;

        heart1.style.bottom = value * 0.2 + 'px';
        heart2.style.bottom = value * 0.5 + 'px';
        aboutme.style.bottom = value * -0.01 + 'px';
});


// jQuery(document).ready(function($) {
//     $('.slider-img').on('click', function(){
//         $('.slider-img').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// let number = document.getElementById('number');
// let counter = 0;
// setInterva(() => {
//     if(counter == 65){
//         clearInterval();
//     }else{
//         counter += 1;
//         number.innerHTML = counter + '%';
//     }
// }, 30);


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');
let currentItemIndex = 0;

next.addEventListener('click', function() {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    slide.appendChild(items[currentItemIndex]);
});

prev.addEventListener('click', function() {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    slide.prepend(items[currentItemIndex]);
});

