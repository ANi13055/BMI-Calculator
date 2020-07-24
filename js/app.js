// Variables
let weight = document.querySelector('.kg-value');
let pound = document.querySelector(".pound-value");
let gram = document.querySelector(".gram-value");
let ounce = document.querySelector(".ounce-value");
let redLabel = document.querySelector(".label");
let convert = document.querySelector(".convert-btn");

// Convert the value
convert.addEventListener("click", function () {
    let weightValue = document.querySelector(".kg-value").value;
    let weightBox = document.querySelectorAll(".weight-box");

    // regex in digit
    let regEx = /^[\d]/;

    if (regEx.test(weightValue)) {
        pound.innerText = weightValue * 2.205;
        gram.innerText = weightValue * 1000;
        ounce.innerText = weightValue * 35.274;
        redLabel.style.opacity = "0";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].style.opacity = '1';
            weightBox[i].style.transition = 'all 350ms ease-out'
        }

        // change button innertext
        convert.innerText = 'Converted';
    }
    else {
        document.querySelector(".kg-value").value = "";
        redLabel.style.opacity = "1";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].style.opacity = '';
        }

        // change button innertext
        convert.innerText = 'Convert';
    }
});

weight.addEventListener('keypress', (e) => {
    // console.log(e);
    convert.innerText = 'Convert';
})