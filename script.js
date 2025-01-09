// Get references to all the buttons and the display
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

// Buttons for digits
const digitButtons = document.querySelectorAll('.digit');

// Buttons for operators
const operatorButtons = document.querySelectorAll('.operator');

// Decimal point button
const decimalButton = document.getElementById('decimal');

// Variable to store the current input and operator
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to handle digit button clicks
digitButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Append the digit to the current input
    currentInput += button.textContent;
    updateDisplay(currentInput);
  });
});

// Function to handle operator button clicks
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Append the operator to the current input
    if (currentInput !== '') {
      currentInput += ' ' + button.textContent + ' ';
      updateDisplay(currentInput);
    }
  });
});

// Function to handle the equals button
equalsButton.addEventListener('click', () => {
  if (currentInput !== '') {
    // Evaluate the expression using the Function constructor (safe eval-like)
    try {
      let result = Function('return ' + currentInput.replace(/[^-()\d/*+.]/g, '') )();
      currentInput = result.toString();
      updateDisplay(currentInput);
    } catch (error) {
      currentInput = 'Error';
      updateDisplay(currentInput);
    }
  }
});

// Function to handle the clear button
clearButton.addEventListener('click', () => {
  currentInput = '';
  updateDisplay('0');
});

// Function to handle the decimal button
decimalButton.addEventListener('click', () => {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
});
