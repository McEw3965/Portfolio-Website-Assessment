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
});


const root = document.documentElement;
const computedStyles = getComputedStyle(root);

let isDarkMode;

function darkModeToggle() {

    console.log('A' + isDarkMode);

    isDarkMode = parseInt(localStorage.getItem("isDarkMode"));

    console.log('B' + isDarkMode);

    if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        console.log('C' + isDarkMode);
        
        // isDarkMode = 1; 

        localStorage.setItem("isDarkMode", "1"); 

    } else if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        console.log('C' + isDarkMode);

       // isDarkMode = 0;

        localStorage.setItem("isDarkMode", "0");
    }
}

function darkModeCheck() {

    isDarkMode = parseInt(localStorage.getItem("isDarkMode"));

    if (!isDarkMode) {
        console.log('Is Running');
        isDarkMode = 1;
    }

    console.log(isDarkMode);

    if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

    } else if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

    }
}

window.addEventListener('load', function () {

    darkModeCheck();
})


