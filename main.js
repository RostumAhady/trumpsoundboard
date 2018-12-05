const {Howl, Howler} = require('howler');

window.onload = function(){
    let image1 = new Image();
    let image2 = new Image();
    let image3 = new Image();
    let image4 = new Image();
    
    image1.src = 'images/plane.gif';
    image2.src = 'images/bing.gif';
    image3.src = 'images/bingbong.gif';
    image4.src = 'images/boo.gif';

}

let bg = document.getElementById("bg");
bg.addEventListener("click", addImage)
function addImage(mouse) {
    let x = mouse.clientX
    let y = mouse.clientY
    rand = Math.random();
    let img = document.createElement("img");
    img.className = "face",
    img.style.top = y - 150 + "px",
    img.style.left = x - 110 +"px",
    bg.appendChild(img),
    // randomly selecting which image and sound plays. Depending on number of images, will have to manually change probability.
    // Math.random() > 0.50 ? (img.src = "/images/maria1.png", sound1.play()) : (img.src = "images/maria2.jpg", sound2.play())
    rand >= 0.75 ? (img.src = "images/plane.gif", planeAudio.play())
    : rand >=0.5 && rand < 0.75 ? (img.src = "images/bing.gif", bingAudio.play()) 
    : rand >= 0.25 && rand < 0.5 ? (img.src = "images/bingbong.gif", bingBongAudio.play()) 
    : (img.src = "images/boo.gif", booAudio.play())
}

window.addEventListener("load", function(){
    bg.style.opacity = '1';
})


//howler.js audio retrieval


const planeAudio = new Howl({ src: ["audio/plane.mp3"]});
const bingAudio = new Howl({src: ["audio/bing.mp3"]});
const bingBongAudio = new Howl({src: ["audio/bingbong.mp3"]});
const booAudio = new Howl({src: ["audio/boo.mp3"]});
