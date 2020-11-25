function addition_Function() { //Addition function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //Subtraction function
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //Multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division() { //Division function
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math () { //Multiple variables
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,
    divided in half and then subtracted by 5 equals " + simple_Math";
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a
    remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function var X = 5; //Increment
X++;
document.write("X");

function var Y = 5.25; //Decrement
Y++;
document.write(Y);

window.alert(Math.random()); //Random