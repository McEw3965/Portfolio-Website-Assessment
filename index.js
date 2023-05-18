let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let image = document.getElementById("image");

document.addEventListener("visibilitychange", function() {

    if (document.hidden) {
        slide1.style.animationPlayState = "paused";
        slide2.style.animationPlayState = "paused";
        slide3.style.animationPlayState = "paused";
    } else {
        slide1.style.animationPlayState = "running";
        slide2.style.animationPlayState = "running";
        slide3.style.animationPlayState = "running";
    }
} );

const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const circle5 = document.getElementById("circle5");

