let progressText = document.getElementsByClassName("progressText");



window.addEventListener('load', function () {

    console.log(progressText);

    setTimeout(function () {
        document.getElementById("cPlusPlus").classList.remove("progressZero");
    }, 0)

    setTimeout(function () {
        document.getElementById("html").classList.remove("progressZero");
        progressText[0].style.opacity = "100%";
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
        progressText[3].style.opacity = "100%";
    }, 8000)

})