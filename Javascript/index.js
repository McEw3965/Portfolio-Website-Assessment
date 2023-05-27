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

isDarkMode = parseInt(localStorage.getItem("isDarkMode"));

console.log('Before if:' + isDarkMode);

if (isDarkMode != 1 & isDarkMode != 0) {
    isDarkMode = 0;
    console.log('isRunning');
}

function darkModeToggle() {

    isDarkMode = parseInt(localStorage.getItem("isDarkMode"));

    console.log(isDarkMode);

    if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        document.getElementById("darkMode").innerHTML = "☼ Light Mode";

        localStorage.removeItem('isDarkMode');
        localStorage.setItem("isDarkMode", "1");

    } else if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        document.getElementById("darkMode").innerHTML = "☼ Dark Mode";

        localStorage.removeItem('isDarkMode');
        localStorage.setItem("isDarkMode", "0");
    }
}

function darkModeCheck() {

    if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        document.getElementById("darkMode").innerHTML = "☼ Light Mode";

    } else if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');

        const secondaryColour = computedStyles.getPropertyValue('--secondary-colour');
        const backgroundColour = computedStyles.getPropertyValue('--background-colour');

        document.getElementById("darkMode").innerHTML = "☼ Dark Mode";

    }
}

window.addEventListener('load', function () {

    darkModeCheck();
})

//Text to Speech

const heading1 = document.getElementsByTagName("h1");

const synth = window.speechSynthesis;
let text = "Text to speech is working";

let TTSActive = 0;

function speak(text) {
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

function TTS() {
    console.log('running');
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
        speak(selectedText);
    }
}

function activateTTS() {
    if (TTSActive === 0) {
        document.addEventListener('mouseup', TTS);
        TTSActive = 1;
    } else if (TTSActive === 1) {
        document.removeEventListener('mouseup', TTS);
        TTSActive = 0;
    }
}







