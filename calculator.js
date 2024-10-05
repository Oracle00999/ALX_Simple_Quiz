// add funtion
function add (number1, number2) {
    return number1 + number2;
}

// subtract function
function subtract (number1, number2) {
    return number1 - number2;
}

// multiplication function
function multiply (number1, number2) {
    return number1 * number2;
}

// division function
function divide (number1, number2) {
    return number1 / number2;
}

// eventlistener for add button
 document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;

 });

// eventlistener for sub button
document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;

});

// eventlistener for multiply button
 document.getElementById('multiply').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;

 });

// eventlistener for divide button
 document.getElementById('divide').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;

 });
