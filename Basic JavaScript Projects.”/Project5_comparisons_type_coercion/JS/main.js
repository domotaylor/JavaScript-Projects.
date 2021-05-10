document.write("15" + 5);       //this code is how you would combine a string with an number
document.write("<br>");
document.write(typeof 3);       //This operator gives the data type of a variable
function My_Function() {
    document.getElementById("Test").innerHTML=0/0; //
}                               //The result would be NaN because you can’t divide 0 by 0.


function My_Function() {
    document.getElementById("Test").innerHTML=isNaN('This is a string');        //This would display the result “true” because 'This is a string' is not a number.
}

function My_Function() {
    document.getElementById("Test").innerHTML=isNaN('007');     //This would result in “false” because 007 is a number.

}

function not_function() {
    document.getElementById("Not").innerHTML=!(20>10);          //The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.
}
document.write("<br>");      // anytime you see this code it simple means a line break
document.write(2E310);      //this code is how you would display an infinity on the browser
document.write("<br>");
document.write(-3E310);     //this code show if you want to display an negative infinity 
document.write("<br>");
document.write(10<2);       //shows false in the broswer because 10 is not less than 2
document.write("<br>");
document.write(10>2);       //this would be true because 10 is greater than. > is greater than and < is less than
document.write("<br>");
console.log(12<9);          //console.log is when you put the code in and the answer would show once you go into the console in the browser.
document.write("<br>");
Document.write(10==10);     // the “==” symbol is an instruction to check whether the data on the left side of the symbol is equal to the data on the right side.
document.write("<br>");
document.write(5==12);      //this result would be false 5 does not equal 12
document.write("<br>");
X = 15;
Y = 15;
document.write(X===Y);      //===” symbol is an instruction to check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right.
document.write("<br>");
document.write(5>2 && 10>4) //The && operator determines the logic between values or variables, such as verifying that ___ and ___ are true (both must be true to return “true.” If one or both is false, the code will return “false”).
document.write("<br>");
document.write(5>10 || 10>4);// the || symbol means at least one has to be true. 10 is greater than 4 so its true
document.write("<br>");
var D = "The number six looks like" + "6"       
document.write(D);                              

