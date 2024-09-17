const input = document.getElementById('display');

function appendToDisplay(caractere){
    input.value += caractere;
}

function clearDisplay(){
    input.value = '';
}

function calculateResult(){
    try {
        input.value = eval(input.value); //eval() permet d'exécuter une chaîne de caractères comme du code JavaScript
    } catch (error) {
        input.value = "error"; 
    }
}