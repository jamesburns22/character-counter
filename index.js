const messageLength = document.getElementById("message-length");
const remainingLength = document.getElementById("remaining-length");
const textInput = document.getElementById("text-area");

function countUp() {
    messageLength.innerHTML = textInput.value.length
    console.log();
}

function countDown() {
    remainingLength.innerHTML = (250 - textInput.value.length);
}

textInput.addEventListener("input", countUp)
textInput.addEventListener("input", countDown)

