//Initialises key variables

let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

document.addEventListener("visibilitychange", function () { //Triggers if window visibility is changed

    if (document.hidden) {
        slide1.style.animationPlayState = "paused";
        slide2.style.animationPlayState = "paused";
        slide3.style.animationPlayState = "paused"; //Pauses animation if window is hidden
    } else {
        slide1.style.animationPlayState = "running"; //Plays animation if window is visible
        slide2.style.animationPlayState = "running";
        slide3.style.animationPlayState = "running";
    }
});


const root = document.documentElement; //Creates constant variable 'root', corresponding to the root element in css files

isDarkMode = parseInt(localStorage.getItem("isDarkMode"));

if (isDarkMode != 1 & isDarkMode != 0) { //If isDarkMode is not equal to one or zero, set vairblae equal to 0
    isDarkMode = 0;
}

function darkModeToggle() { //Creates function

    isDarkMode = parseInt(localStorage.getItem("isDarkMode")); //Sets value of isDarkMode equal to value in local storage. ParseInt ensure numeric value

    if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539'); //Sets value of css variables. Swaps background colour and text colour

        document.getElementById("darkMode").innerHTML = "☼ Light Mode"; //Changes text in dark mode button

        localStorage.removeItem('isDarkMode'); //Removes value of variable in local storage
        localStorage.setItem("isDarkMode", "1"); //Sets value of variable in local storage

    } else if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');


        document.getElementById("darkMode").innerHTML = "☼ Dark Mode";

        localStorage.removeItem('isDarkMode');
        localStorage.setItem("isDarkMode", "0");
    }
}

function darkModeCheck() { //Similar function to above. Removes some features to allow darkmode to persist between screens

    if (isDarkMode === 1) {
        document.documentElement.style.setProperty('--secondary-colour', '#fbf3f2');
        document.documentElement.style.setProperty('--background-colour', '#032539');

        document.getElementById("darkMode").innerHTML = "☼ Light Mode";

    } else if (isDarkMode === 0) {
        document.documentElement.style.setProperty('--secondary-colour', '#032539');
        document.documentElement.style.setProperty('--background-colour', '#fbf3f2');

        document.getElementById("darkMode").innerHTML = "☼ Dark Mode";

    }
}

window.addEventListener('load', function () { //Triggers function when window loads
    darkModeCheck();
})

//Text to Speech

const heading1 = document.getElementsByTagName("h1"); //Defines heading1 variable

const synth = window.speechSynthesis; //Creates synth variable

let TTSActive = 0; //Creates variable for toggle

function speak(text) { //Function needs to be passed a value that will be assigned to 'text' variable found in function
    const utterThis = new SpeechSynthesisUtterance(text); //Creates instance of text to speech
    synth.speak(utterThis); //Reads out given text
}

function TTS() {
    const selectedText = window.getSelection().toString().trim(); //Gets text currently selected on page. Converts to a string. Removes whitespace at start and end of string
    if (selectedText !== '') { /*If selected text is not equal to an empty space, read out selected text*/
        speak(selectedText);
    }
}

function activateTTS() {
    if (TTSActive === 0) { /*If TTSActive is qual to 0, execute following code*/
        document.addEventListener('mouseup', TTS); /*Adds event listener that triggers TTS function when mouse is released*/
        TTSActive = 1; /*Changes value of TTSActive variable to 1*/
    } else if (TTSActive === 1) {
        document.removeEventListener('mouseup', TTS); /*Removes evenet listener, allowing a toggle button*/
        TTSActive = 0;
    }
}







