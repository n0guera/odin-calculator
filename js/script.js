const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', toDisplay);
}

const operatorButtons = document.querySelectorAll('.operator');
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', toDisplay);
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

function clearDisplay() {
    display.textContent = null;
}

function toDisplay() {
    display.textContent += this.textContent;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
