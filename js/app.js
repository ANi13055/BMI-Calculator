// Variables
let poundValue = document.querySelector(".pound-value");
let gramValue = document.querySelector(".gram-value");
let ounceValue = document.querySelector(".ounce-value");
let weightBox = document.querySelectorAll(".weight-box");
let redLabel = document.querySelector(".label");

// TODO: Convert the value onclick
const convert = document.querySelector(".convert-btn");
convert.addEventListener("click", function () {
    let weightValue = document.querySelector(".kg-value").value;
    let regEx = /\d/;

    if (regEx.test(weightValue)) {
        poundValue.innerText = weightValue * 2.205;
        gramValue.innerText = weightValue * 1000;
        ounceValue.innerText = weightValue * 35.274;
        redLabel.style.opacity = "0";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].style.opacity = '1';
            weightBox[i].style.transition = 'all 350ms ease-out'
        }
    }
    else {
        document.querySelector(".kg-value").value = "";
        redLabel.style.opacity = "1";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].style.opacity = '';
        }
    }
});
