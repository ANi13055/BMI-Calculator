// Variables
let weight = document.querySelector('.kg-value');
let height = document.querySelector('meter-value');

// weight converter
let weightConvert = document.querySelector(".weight-btn");

weightConvert.addEventListener("click", function () {
    let weightValue = document.querySelector(".kg-value").value;
    let weightBox = document.querySelectorAll(".weight-box");
    // weight measure
    let pound = document.querySelector(".pound-value");
    let gram = document.querySelector(".gram-value");
    let ounce = document.querySelector(".ounce-value");

    // regex in digit
    let regEx = /^[\d]/;

    if (regEx.test(weightValue)) {
        pound.innerText = weightValue * 2.205;
        gram.innerText = weightValue * 1000;
        ounce.innerText = weightValue * 35.274;

        // label
        let redLabel = document.querySelector(".label");
        redLabel.style.opacity = "0";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].classList.add('show');
        }

        // change button innertext
        weightConvert.innerText = 'Converted';
    }
    else {
        document.querySelector(".kg-value").value = "";
        redLabel.style.opacity = "1";

        for (i = 0; i < weightBox.length; i++) {
            weightBox[i].classList.remove('show');
        }

        // change button innertext
        weightConvert.innerText = 'Convert';
    }
});

weight.addEventListener('mousedown', (e) => {
    // console.log(e);
    weightConvert.innerText = 'Convert';
});


// height converter
let heightConvert = document.querySelector(".height-btn");

heightConvert.addEventListener("click", function () {
    let heightValue = document.querySelector(".meter-value").value;
    let heightBox = document.querySelectorAll(".height-box");
    // weight measure
    let km = document.querySelector(".km-value");
    let inch = document.querySelector(".inch-value");
    let foot = document.querySelector(".foot-value");

    // regex in digit
    let regEx = /^[\d]/;

    if (regEx.test(heightValue)) {
        km.innerText = heightValue * 0.001;
        inch.innerText = heightValue * 39.37;
        foot.innerText = heightValue * 3.28;

        // label
        let redLabel = document.querySelector(".label");
        redLabel.style.opacity = "0";

        for (i = 0; i < heightBox.length; i++) {
            heightBox[i].classList.add('show');
        }

        // change button innertext
        heightConvert.innerText = 'Converted';
    }
    else {
        document.querySelector(".meter-value").value = "";
        redLabel.style.opacity = "1";

        for (i = 0; i < heightBox.length; i++) {
            heightBox[i].classList.remove('show');
        }

        // change button innertext
        heightConvert.innerText = 'Convert';
    }
});

height.addEventListener('mousedown', (e) => {
    // console.log(e);
    heightConvert.innerText = 'Convert';
})
