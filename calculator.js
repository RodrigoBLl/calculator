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

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}