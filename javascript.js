const currentSelectionScreen = document.getElementById('current_selection_screen')
const previousSelectionScreen = document.getElementById('previous_selection_screen')
const digits = document.querySelectorAll('[data-number]')
const MathematicalOperator = document.querySelectorAll('[data-operator]')
let FirstNumber = 0;
let SecondNumber = 0;
let selectedOperator = 0;
let shouldResetPrevScreen = 0;
let shouldResetScreen = 0;

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}



function addNumber(number) {
    if (currentSelectionScreen.textContent === "0" || shouldResetScreen == 1)
        resetScreen()
    currentSelectionScreen.textContent += number;
}
function addOperator(operator) {
    if (currentSelectionScreen.textContent === "0" || shouldResetScreen == 1)
        {resetScreen()}
    FirstNumber=currentSelectionScreen.textContent
    console.log(FirstNumber)
    currentSelectionScreen.textContent += operator;
    selectedOperator=operator;
    console.log(selectedOperator)
    previousSelectionScreen.textContent += FirstNumber + operator
    currentSelectionScreen.textContent =' '
}
digits.forEach(button => button.addEventListener('click', () => addNumber(button.textContent)))
MathematicalOperator.forEach(button => button.addEventListener('click', () => addOperator(button.textContent)))
digits.forEach(button => button.addEventListener('click', () => console.log(button.textContent)))


function resetScreen() {
    currentSelectionScreen.textContent = ''
    shouldResetScreen = 0;
}
function resetPrevScreen() {
   previousSelectionScreen.textContent = ''
    shouldResetPrevScreen = 0;
}
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
        default:
            return null
    }
}
function equalsTo ()
{
    SecondNumber= currentSelectionScreen.textContent
    previousSelectionScreen.textContent = previousSelectionScreen.textContent + SecondNumber
    let result = operate(selectedOperator , FirstNumber , SecondNumber)
    currentSelectionScreen.textContent = result
    shouldResetScreen = 1;
    let shouldResetPrevScreen = 1;
}