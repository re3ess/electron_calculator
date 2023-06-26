const buttons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.calc-display');

let firstOperand = null;
let operator = null;
let currentOperand = '';

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.target;
    const value = target.innerText;
    if (target.id === 'clear') {
      firstOperand = null;
      operator = null;
      currentOperand = '';
      display.innerText = '0';
    } else if (target.id === 'plus-minus') {
      display.innerText = -1 * display.innerText;
    } else if (target.id === 'percentage') {
      display.innerText = parseFloat(display.innerText) / 100;
    } else if (
      target.id === 'divide' ||
      target.id === 'multiply' ||
      target.id === 'minus' ||
      target.id === 'add'
    ) {
      operator = value;
      firstOperand = parseFloat(display.innerText);
      currentOperand = '';
    } else if (target.id == 'equals') {
      if (operator) {
        const secondOperand = parseFloat(display.innerText);
        if (operator === '+') {
          firstOperand = firstOperand + secondOperand;
        } else if (operator === '-') {
          firstOperand = firstOperand - secondOperand;
        } else if (operator === '×') {
          firstOperand = firstOperand * secondOperand;
        } else if (operator === '÷') {
          firstOperand = firstOperand / secondOperand;
        }
        operator = null;
        currentOperand = firstOperand.toString();
        display.innerText = firstOperand;
      }
    } else {
      if (value === '.' && currentOperand.includes('.')) {
        return;
      }
      currentOperand += value;
      display.innerText = currentOperand;
    }
  });
});
