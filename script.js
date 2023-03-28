const display = document.getElementById('display');

function addNumber(number) {
  display.value += number;
}

function addOperator(operator) {
  if (display.value === '') return;
  if (display.value.slice(-1) === '+' ||
      display.value.slice(-1) === '-' ||
      display.value.slice(-1) === '*' ||
      display.value.slice(-1) === '/') {
    // Replace the last operator with the new operator
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function addDecimal() {
  if (display.value === '') {
    display.value = '0.';
  } else if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function addFunction(func) {
  display.value = func + display.value + ')';
}

function clearDisplay() {
  display.value = '';
}

function deleteLastDigit() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
