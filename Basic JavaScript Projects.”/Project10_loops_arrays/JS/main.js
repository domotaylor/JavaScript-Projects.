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
//“For Loop” is used to repeat a section of code a number of times. For Loops are used when the number of iterations are known.
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Arrays are objects and, so, are included in the object data type. Objects can have properties (characteristics) and methods (actions).
function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "in this picture, the dog is " +
        Dog_Picture[2] + ".";
}
//The name const is slightly misleading because it doesn’t technically create a “constant” (something immutable). Basically, the value assigned by the const keyword is not immutable (it can change) – yet, the variable identifier cannot be reassigned
function constant_function() {
    const Musical_Instrument = {type:"guitar",brand:"Fender",color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//The let keyword declares variables that can have block scope. As a reminder, this refers to blocks of code contained within curly brackets – commonly loops
var X = 82;
document.write(X);
{
    let X = 33
    document.write("<br>" + X);
}
document.write("<br>" + X);

var X =82;
document.write(X);
{
    var  X = 33
    document.write("<br>" + X);
}
document.write("<br>" + X);
//Methods are actions that can be performed on objects. In JavaScript, they are stored within properties as functions. One way to do this is utilizing the return statement and “this” keyword.
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML =car.description();