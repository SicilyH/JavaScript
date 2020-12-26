function My_First_Function() {           //Defining a function and naming it
    var str = "This text is green!";     //Defining a variable/giving it a string value

    var result = str.fontcolor("green"); //Using thr fontcolor method on str variable

    document.getElementById("Green_Text").innerHtml = result;  //Putting the value
                                                               //of result into HTML element with "Green_Text" id
}