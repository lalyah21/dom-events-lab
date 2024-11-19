/*-------------------------------- Constants --------------------------------*/


const operators = ['+', '-', '*', '/'];

/*-------------------------------- Variables --------------------------------*/


let currentInput = '';

let previousInput = '';

let currentOperator = '';

/*------------------------ Cached Element References ------------------------*/


const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);  
  });
});

/*-------------------------------- Functions --------------------------------*/

function updateDisplay(value) {
  console.log('Updating display to:', value);  
  display.textContent = value; 
}

function calculate() {
  if (currentInput === '' || previousInput === '') return;  

  let result;
  const prev = parseFloat(previousInput); 
  const current = parseFloat(currentInput); 

  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  updateDisplay(result);
  currentInput = result.toString();  
  previousInput = '';  
  currentOperator = '';  
}

function handleButtonClick(event) {
  const buttonValue = event.target.innerText; 
  console.log('Button clicked:', buttonValue);  

  if (operators.includes(buttonValue)) {
    if (currentInput === '') return;  
    if (previousInput !== '') {
      calculate();  
    }
    currentOperator = buttonValue;  
    previousInput = currentInput;  
    currentInput = '';  
  } 
  
  else if (buttonValue === '=') {
    calculate();  
  } 
  
  else if (buttonValue === 'C') {
    currentInput = '';  
    previousInput = '';  
    currentOperator = '';  
    updateDisplay('0');  
  } 
  
  else {
    currentInput += buttonValue;  
    updateDisplay(currentInput);  
  }
}

