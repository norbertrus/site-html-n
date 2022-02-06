// selectam elementul h3
const css = document.querySelector("h3");
// selectam input-urile
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
// selectam body
const body = document.querySelector("#gradient");
// selectam butonul
const randomBtn = document.querySelector('#randomBtn');

function setGradient(firstColor, secondColor) {
    // selectam proprietatea background din body
    // setam background-ul la culorile alese
    body.style.background = "linear-gradient(to right, "  + firstColor + ", " + secondColor + ")";

    css.textContent = body.style.background + ";";
}

function setGradientOnInput() {
    setGradient(color1.value, color2.value);
}

// returneaza un numar aleator intre 0 si 250
function randomizer() {
    // math.floor() - returneaza cel mai mare numar rotunjit
    // math.random() - returneaza un numar intre 0 si 1
    return Math.floor(Math.random() * Math.floor(250))
}
 
// returneaza un text pentru a-l folosi ca background
function randomColor() {
    const randomColor = "rgb(" + randomizer() + ", " + randomizer() + ", " + randomizer() + ")";
    return randomColor;
}

// schimba fundalul in functie de valorile random
function setRandomGradient() {
    setGradient(randomColor(), randomColor()) ;
}

randomBtn.addEventListener("click", setRandomGradient);
color1.addEventListener("input", setGradientOnInput)
color2.addEventListener("input", setGradientOnInput)

setGradientOnInput();