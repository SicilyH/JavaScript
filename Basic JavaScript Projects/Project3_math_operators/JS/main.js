function addition() { //Addition function
    var addition = 2 + 2;
    document.getElementById("Math0").innerHTML = "2 + 2 = " + addition;
}

function subtraction() { //Subtraction function
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //Multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math;
}

function division() { //Division function
    var simple_Math = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math () { //Multiple variables
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

function letter () {
    X = 5; //Increment
    X++;
    document.write("X");
}

function letter () {
    Y = 5.25; //Decrement
    Y++;
    document.write("Y");
}

window.alert(Math7.random()); //Random

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}