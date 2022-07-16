const messageLength = document.getElementById("message-length");
const remainingLength = document.getElementById("remaining-length");
const wordNumber = document.getElementById("word-counter");
const textInput = document.getElementById("text-area");
const showIfEbru = document.getElementById("show-if-ebru");
const showIfPiglet = document.getElementById("show-if-piglet");

function countUp() {
    messageLength.innerHTML = textInput.value.length
    console.log();
}

function countDown() {
    remainingLength.innerHTML = (`Remaining: ${500 - textInput.value.length}`);
}

function wordCounter() {
    const wordAmount = textInput.value.split(" ");
    const wordAmountFiltered = wordAmount.filter(element => element !== '')
    wordNumber.innerHTML = (`Words: ${wordAmountFiltered.length}`)
}


const checkIfEbru = () => {
    if (textInput.value === "my name is ebru") {
        showIfEbru.classList.replace("ebru-false", "ebru-true")
    } else (
        showIfEbru.classList.replace("ebru-true", "ebru-false")
    );
}

const checkIfPiglet = () => {
    if (textInput.value === "my name is piglet") {
        showIfPiglet.classList.replace("piglet-false", "piglet-true")
    } else (
        showIfPiglet.classList.replace("piglet-true", "piglet-false")
    );
}

textInput.addEventListener("input", countUp);
textInput.addEventListener("input", countDown);
textInput.addEventListener("input", wordCounter);
textInput.addEventListener("input", checkIfEbru);
textInput.addEventListener("input", checkIfPiglet);