const inputName = document.querySelector("#input-name")
const inputCard = document.querySelector("#input-card");
const inputDate = document.querySelector("#input-date");
const inputCVV = document.querySelector("#input-cvv");

const cardName = document.querySelector("#card-name")
const cardCard = document.querySelector("#card-number");
const cardDate = document.querySelector("#card-date");
const cardCVV = document.querySelector("#card-cvv");

const form = document.querySelector("#form");
const thankYou = document.querySelector("#thank-you");
const continueBtn = document.querySelector("#continue");

const maskNumber = "#### #### #### ####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Applessed";
    }
});

inputCard.addEventListener("keydown", (e) => {
    cardCard.innerText = inputCard.value;

    if (inputCard.value.length === 0) {
        cardCard.innerText = "0000 0000 0000 0000";
    }
    
    if (e.key == "Tab") {
        return;
    }
    
    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join("");
});

inputDate.addEventListener("keydown", (e) => {
    cardDate.innerText = inputDate.value;

    if (inputDate.value.length === 0) {
        cardDate.innerText = "00/00";
    }
    
    if (e.key == "Tab") {
        return;
    }
    
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
    
});

inputCVV.addEventListener("keydown", (e) => {
    cardCVV.innerText = inputCVV.value;

    if (inputCVV.value.length === 0) {
        cardCVV.innerText = "000";
    }

    if (e.key == "Tab") {
        return;
    }
    
    e.preventDefault();
    handleInput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
});

function handleInput(mask, key, arr) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (key == "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    }

    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] == "-" || mask[arr.length] == "/" || mask[arr.length] == " ") {
            arr.push(mask[arr.length], key);
        }
        else {
            arr.push(key);
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
});

continueBtn.addEventListener("click", () => {
    form.classList.remove("disabled");
    thankYou.classList.add("disabled");
    form.reset();
    cardName.innerText = "Jane Applessed";
    cardCard.innerText = "0000 0000 0000 0000";
    cardDate.innerText = "00/00";
    cardCVV.innerText = "000";
});