document.write(typeof "Word" + "<br/>") // data type sttring
document.write(typeof 3 + "<br/>"); //data type number

function my_Function() { //NaN= not a number
document.getElementById("Test1").innerHTML = 0/0;
}
function my_Function2() {
document.getElementById("Test2").innerHTML = isNaN('This is a string'); //NaN string
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007'); //NaN number
}

document.write(2E310 + "<br/>"); //infinity
document.write(-3E310 + "<br/>");//negative infinity
document.write(10 > 2 + "<br/>" ); //boolean logic
document.write(10 < 2 + "<br/>");
console.log(2 + 2 + "<br/>"); // displays 4 in console
document.write("10" + 5 + "<br/>"); // type coercion
document.write(10 == 10 + "<br/>"); // double equals, comparison should be made
document.write(3 == 11 + "<br/>"); // Operators

X = 10; // data on the left side of the symbol is equal to the data on the right side
Y = 10; // and is same data on the right side
document.write(X === Y);

X = 82;
Y = 82;
document.write(X === Y);

A = "Magnus"; 
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 >4);
document.write(5 > 10 || 10> 4);

function not_Function () {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

