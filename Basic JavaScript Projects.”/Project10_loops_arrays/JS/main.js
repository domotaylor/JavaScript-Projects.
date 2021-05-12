//The “While Loop” means that “while (blank) is occurring, do (blank).” A while loop is basically a repeating “if statement.” Meaning, you are telling the computer to execute certain code repeatedly while a particular condition is present.
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//A “For Loop” is used to repeat a section of code a number of times. For Loops are used when the number of iterations are known.
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}