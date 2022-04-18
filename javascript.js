const currentSelectionScreen = document.getElementById('current_selecton_screen')
const digits = document.querySelectorAll('digit')

function addNumber(number)
{
    currentSelectionScreen.textContent +=number;


}
digits.forEach((button) => button.addEventListener('click', ()=> addNumber(button.textContent))) 