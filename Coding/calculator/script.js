const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const decimalButton = document.querySelector('[data-decimal]');

let currentInput = '';
let previousInput = '';
let operation = null;

function updateDisplay() {
    display.value = currentInput || '0';
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '0' && currentInput === '0') return;
        currentInput = currentInput.toString() + button.innerText.toString();
        updateDisplay();
    });
});


decimalButton.addEventListener('click', () => {
    if (currentInput.includes('.')) return;
    if (currentInput === '') currentInput = '0';
    currentInput += '.';
    updateDisplay();
});


operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return;
        if (previousInput !== '') calculate();
        
        operation = button.innerText;
        previousInput = currentInput;
        currentInput = '';
    });
});


function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '*': computation = prev * current; break;
        case '/': 
            computation = current === 0 ? 'Error' : prev / current; 
            break;
        default: return;
    }

    currentInput = computation.toString();
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

equalsButton.addEventListener('click', calculate);


clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
});