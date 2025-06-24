const display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = '';
let shouldResetDisplay = false;

function updateDisplay() {
    display.innerText = currentInput;
}

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = value;
        shouldResetDisplay = false;
    } else if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}


function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function calculateResult() {
    if (operator === null || shouldResetDisplay) {
        return;
    }

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x': 
            result = prev * current;
            break;
        case '%': 
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

document.querySelectorAll('.button.operator').forEach(button => {
    button.addEventListener('click', (event) => {
        if (operator !== null && !shouldResetDisplay) {
            calculateResult();
        }
    
        operator = event.target.dataset.op || event.target.innerText;
        previousInput = currentInput;
        shouldResetDisplay = true;
    });
});


updateDisplay();