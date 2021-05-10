document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger"); //Name_of_variable = (condition) ? Value_1:Value_2 The ternary operator is “?.” 
document.write("<br>");

function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").Value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";               //Another example of Ternary operator
    document.getElementById("Ride").innerHTML= Can_ride +" to ride.";
}                                                                        

document.write("<br>");
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Dominique = new Vehicle("Dodge", "Viper", 2020, "Blue");
var Shatona = new Vehicle("Jeep", "Trail Hawk", 2019, "Purple and Black");
var Jamal = new Vehicle("Ford", "Pinto", 1990, "Gold");
function MyFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Jamal drives a" + Jamal.Vehicle_Color + "-colored" + Jamal.Vehicle_Model +
    " manufactured in " + Jamal.Vehicle_Year;
}                                                                                // this code show us using the "new" and "this" keyword function

function count_Function() {
    document.getElementsById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }                                                                          //A nested function is a function under another function that is connected somehow.
}