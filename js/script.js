const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

const equalsButton = document.querySelector('#equals');

const resultOnDisplay = false;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        let currentString = display.textContent;
        let lastChar = currentString[currentString.length - 1];

        if (resultOnDisplay === false) {
            display.textContent += e.target.textContent;
        } else if (resultOnDisplay === true && lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
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

        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.textContent;
            display.textContent = newString;
        } else if (currentString.length === 0) {
            ;
        } else {
            display.textContent += e.target.textContent;
        }
    });
}

function clearDisplay() {
    display.textContent = null;
}
