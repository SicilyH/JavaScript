function full_Sentence() {  //string
    var part_1 = "I have ";
    var part_2 = " made this ";
    var part_3 = " into a complete ";
    var part_4 = " sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {   //slice method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {  //string
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {  //precision
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function countdown () {
    var seconds = document.getElementById("seconds").nodeValue;

    function tick() { 
        seconds = seconds - 1;
        TimeRanges.innerHTML = seconds;setTimeout(tick, 1000);
        if(seconds == -1) {
            alert("Time's up!");
        }
             }
        tick();
}