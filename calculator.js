let num1 = null;
let num2 = null;
let operator = null;
let numStor = null;
let result = null;
const numBtn = document.querySelectorAll('.num');
const opBtn = document.querySelectorAll('.op');
const calcBtn = document.querySelector('.calc');
const clsBtn = document.querySelector('.cls');
const negBtn = document.querySelector('.neg');
const dp = document.querySelector('.display');


// Event listener for number buttons
function numClick() {
    for (let i=0; i < numBtn.length; i++) {
        numBtn[i].addEventListener('click', () => {
            if (operator == null) { // operator has not yet been assigned - num1
                if (numStor == null) { // very first click
                    numStor = ''; // ready the number storage
                    numStor += numBtn[i].innerText;
                    dp.innerText = numStor;
                } else {
                    numStor += numBtn[i].innerText;
                    dp.innerText = numStor;
                }
            } else { // operator is there - num2
                if (numStor == null || num1 == result) { // very first click
                    numStor = ''; // ready the number storage
                    numStor += numBtn[i].innerText;
                    dp.innerText = numStor;
                } else {
                    numStor += numBtn[i].innerText;
                    dp.innerText = numStor;
                }
            }
        });
    };
}

// Event listener for operator buttons
function opClick() {
    for (let i=0; i < opBtn.length; i++) {
        opBtn[i].addEventListener('click', () => {
            if (operator == null) { // operator is missing: set num1 and assign operator
                if (numStor != null) {
                    num1 = Number(numStor);
                    operator = opBtn[i].innerText;
                    numStor = null;
                    console.log(`num1: ${num1}, operator: ${operator}`);
                } else {
                    return 'ERROR';
                }
            } else { // operator is already set: set num2 and calculate
                if (numStor != null) {
                    num2 = Number(numStor); // set num2
                    result = operate(num1, num2, operator); //calculate
                    dp.innerText = result; // display result

                    num1 = Number(result); // get ready for continued calculation
                    num2 = null;
                    numStor = null;
                    operator = opBtn[i].innerText; // set up new operator
                    console.log(`num1: ${num1}, operator: ${operator} - consecutive calculation`);
                }
            }    
        });
    };
}

// Event listener for calculate (=) button
function calcClick() {
    calcBtn.addEventListener('click', () => {
        if (num1 == null || operator == null || numStor ==null) {
            result = 'ERROR';
        } else {
            num2 = Number(numStor); // finalize num2
            result = operate(num1, num2, operator); // calculate
            console.log(`num1: ${num1}, num2: ${num2}, result: ${result}`);
        }
        dp.innerText = result; // display result
        numStor = Number(result); // ready for continued calculation
        num1 = Number(result);
        num2 = null;
        operator = null;
    });
}

// Event listener for clear button - simply clear everything
function clsClick() {
    clsBtn.addEventListener('click', () => {
        numStor = null;
        num1 = null;
        num2 = null;
        operator = null;
        result = null;
        dp.innerText = '0';
        console.log('--- CLEAR ---');
    });
}

// Event listener for +/- button
function negClick() {
    negBtn.addEventListener('click', () => {
        if (numStor[0] != '-') {
            numStor = '-' + numStor;
        } else {
            numStor = numStor.substring(1);
        }
        console.log(numStor);
    });
}


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
    if (isNaN(a) || isNaN(b) || b == 0) return 'ERROR';
    else return Math.round((a / b)*10000)/10000; // round answer to 4 digits after decimal point
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

// Call all button click event listeners
numClick();
opClick();
calcClick();
clsClick();
negClick();