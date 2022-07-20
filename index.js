const messageLength = document.getElementById("message-length");
const remainingLength = document.getElementById("remaining-length");
const wordNumber = document.getElementById("word-counter");
const textInput = document.getElementById("text-area");
const showIfEbru = document.getElementById("show-if-ebru");
const showIfPiglet = document.getElementById("show-if-piglet");
const upperCaseText = document.getElementById("text-area-uppercaser");
const lowerCaseText = document.getElementById("text-area-lowercaser");
const finalMessage = document.getElementById("life-in-weeks-output");
const userYearsInput = document.getElementById("user-age");
const years = 90;
const extraButton = document.getElementById("extra-button");
const liwChallenge = document.getElementById("life-in-weeks-challenge");

function toggleChallenge() {
    if (liwChallenge.hidden = false) {
        liwChallenge.hidden = true;
    } else {
        liwChallenge.hidden = false;
    }
}

extraButton.addEventListener("click", toggleChallenge)

const updateInput = () => {
    const submitButton = document.getElementById("user-age-confirm");
    let lifeSpan = {
        months: years * 12,
        weeks: years * 52,
        days: years * 365,
    };
    let userYears = document.getElementById('user-age').value;
    let userLife = {
        months: userYears * 12,
        weeks: userYears * 52,
        days: userYears * 365,
    };

    const remainingMonths = lifeSpan.months - userLife.months;
    const remainingWeeks = lifeSpan.weeks - userLife.weeks;
    const remainingDays = lifeSpan.days - userLife.days;


    function printUserYears() {
        updateInput();
        finalMessage.innerHTML = `You Have <span class="empha-numbers">${remainingMonths}</span> months, <span class="empha-numbers">${remainingWeeks}</span> weeks, <span class="empha-numbers">${remainingDays}</span> days left to live assuming you'll live until you are 90`;
    }
    submitButton.addEventListener('click', printUserYears);
}
userYearsInput.addEventListener('change', updateInput)


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

function makeTextLowerCase() {
    lowerCaseText.value = textInput.value.toLowerCase();
}

function makeTextUpperCase() {
    upperCaseText.value = textInput.value.toUpperCase();
}



// const checkIfEbru = () => {
//     const mainMessageLower = textInput.value.toLowerCase();
//     if (mainMessageLower === "my name is ebru") {
//         showIfEbru.classList.replace("ebru-false", "ebru-true")
//         showIfEbru.hidden = false;
//     } else (
//         showIfEbru.classList.replace("ebru-true", "ebru-false")
//     );
// }

// const checkIfPiglet = () => {
//     const mainMessageLower = textInput.value.toLowerCase()
//     if (mainMessageLower === "my name is piglet") {
//         showIfPiglet.classList.replace("piglet-false", "piglet-true")
//         showIfEbru.hidden = true;

//     } else (
//         showIfPiglet.classList.replace("piglet-true", "piglet-false")
//     );
// }

textInput.addEventListener("input", countUp);
textInput.addEventListener("input", countDown);
textInput.addEventListener("input", wordCounter);
textInput.addEventListener("input", makeTextLowerCase);
textInput.addEventListener("input", makeTextUpperCase);

// textInput.addEventListener("input", checkIfEbru);
// textInput.addEventListener("input", checkIfPiglet);