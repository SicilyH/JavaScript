function my_Dictionary() {  //Dictionary function
    var Animal = { //kvps
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };
    delete Animal.Sound; //Delete Statement
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}