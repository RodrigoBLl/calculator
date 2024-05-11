let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function calculate() {
    let result;
    try {

        result = eval(currentInput); // Utiliza la función eval() para evaluar la expresión
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function squareRoot() {
    let input = document.getElementById('display').value;
    let result = Math.sqrt(parseFloat(input)); // Calcula la raíz cuadrada del número actual
    document.getElementById('display').value = result;
}

function deleteCharacter(){
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}