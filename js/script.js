const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

const equalsButton = document.querySelector('#equals');

let resultOnDisplay = false;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        let currentString = display.textContent;
        let lastChar = currentString[currentString.length - 1];

        if (resultOnDisplay === false) {
            display.textContent += e.target.textContent;
        } else if (resultOnDisplay === true && lastChar === '+' || lastChar === '-' || lastChar === '×' || lastChar === '/') {
            resultOnDisplay = false;
            display.textContent += e.target.textContent;
        } else {
            resultOnDisplay = false;
            clearDisplay();
            display.textContent += e.target.textContent;
        }
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(e) {
        let currentString = display.textContent;
        let lastChar = currentString[currentString.length - 1];

        if (lastChar === '+' || lastChar === '-' || lastChar === '×' || lastChar === '/') {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.textContent;
            display.textContent = newString;
        } else if (currentString.length === 0) {
            ;
        } else {
            display.textContent += e.target.textContent;
        }
    });
}

equalsButton.addEventListener('click', function() {
    const displayString = display.textContent;
    const numbers = displayString.split(/\+|\-|\×|\//g);
    const operators = displayString.replace(/[0-9]|\./g, '').split('');

    let divide = operators.indexOf('/');
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf('/');
    }

    let multiply = operators.indexOf('×');
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf('×');
    }

    let subtract = operators.indexOf('-');
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf('-');
    }

    let add = operators.indexOf('+');
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf('+');
    }

    display.textContent = numbers[0];
    resultOnDisplay = true;
});

function clearDisplay() {
    display.textContent = null;
}
