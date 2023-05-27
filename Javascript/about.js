let progressText = document.getElementsByClassName("progressText"); //Assigns each element of class to space in array

window.addEventListener('load', function () { //Triggers when page loads

    console.log(progressText);

    setTimeout(function () { //Sets a delay of 0 seconds. 
        document.getElementById("cPlusPlus").classList.remove("progressZero"); //Removes class from element, allowing for smooth transition
    }, 0)

    setTimeout(function () { //Sets a delay of 2 seconds. New transition triggers after previous one
        document.getElementById("html").classList.remove("progressZero");
        progressText[0].style.opacity = "100%"; // Sets opacity of text after delay
    }, 2000)

    setTimeout(function () {
        document.getElementById("css").classList.remove("progressZero");
        progressText[1].style.opacity = "100%";
    }, 4000)

    setTimeout(function () {
        document.getElementById("javascript").classList.remove("progressZero");
        progressText[2].style.opacity = "100%";
    }, 6000)

    setTimeout(function () {
        progressText[3].style.opacity = "100%"; //Triggers after all other transitions
    }, 8000)

})