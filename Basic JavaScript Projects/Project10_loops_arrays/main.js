function count_To_Ten() {    //while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; 
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Druma", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //for loop
var Content = "";
var Y;
function for_Loop() {         //for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Cat_Pictures(){     //array
    var Cat_Picture = [];
    Cat_Picture[0] = "eating";
    Cat_Picture[1] = "sleeping";
    Cat_Picture[2] = "playing";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

var X = 82;         //let
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);