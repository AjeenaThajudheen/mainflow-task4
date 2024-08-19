// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character from the display
function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
