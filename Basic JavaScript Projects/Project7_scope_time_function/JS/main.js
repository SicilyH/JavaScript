var X = 10;                 //global variable
function Add_numbers_1 () {
    document.write(20 + X + "<br>");
}
function Add_numbers_2 () {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {  //local variable
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1();
Add_numbers_2();

function get_Date() {    //if statement
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {     //if else statement
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
    }
    else if (Time > 12 ==Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}