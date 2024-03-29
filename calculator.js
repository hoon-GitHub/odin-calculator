let num1, num2 = 0;
let operator = '';

function add(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    else return (a + b);
}

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    else return (a - b);
}

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    else return (a * b);
}

function divide(a, b) {
    if (isNaN(a) || isNaN(b) || b===0) return 'ERROR';
    else return (a / b);
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'ERROR';
    }
}