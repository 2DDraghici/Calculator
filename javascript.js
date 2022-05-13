const currentSelectionScreen = document.getElementById('current_selecton_screen')
const digits = document.querySelectorAll('digit')

function addNumber(number)
{
    currentSelectionScreen.textContent +=number;


}
digits.forEach((button) => button.addEventListener('click', ()=> addNumber(button.textContent))) 
function add( a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b
}

function multiply(a,b)
{
    return a*b
}
function divide(a,b)
{
    return a/b
}
