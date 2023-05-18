let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let image = document.getElementById("image");



document.addEventListener("visibilitychange", function () {

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
