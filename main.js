function product() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;

    a = parseFloat(a);
    b = parseFloat(b);

    var result = a * b;
    alert("a x b = " + result);
}

function raiseto() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;

    a = parseFloat(a);
    b = parseFloat(b);

    var result = a ** b;
    alert("a raised to b = " + result);
}

function getremainder() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;

    a = parseFloat(a);
    b = parseFloat(b);

    var result = a % b;
    alert("Remainder = " + result);
}

function IsEqual() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;

    a = parseFloat(a);
    b = parseFloat(b);

    var result = (a === b);
    alert("Is a equal to b? " + result);
}

function onload() {
    document.getElementById('A').value = 1;
    document.getElementById('B').value = 1;
}