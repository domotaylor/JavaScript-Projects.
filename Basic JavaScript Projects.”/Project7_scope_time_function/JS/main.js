//In JavaScript, a global variable can be accessed from any function within the program, whereas a local variable is only accessed by the function it is assigned to.
//Global variables are declared outside of functions, and local variables are declared inside of functions. 
//A global variable would be written as follows:
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x = 100);
}
Add_numbers_1();
Add_numbers_2();

//The following would be an example of a local variable:
function Add_numbers_1() {
    var A = 10;
    document.write(20 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 100);
}
Add_numbers_1();
Add_numbers_2();

//Let’s say you wrote the above code and didn’t understand why Add_numbers_2 didn’t display a result. We could use the console.log() method to help us debug our code as follows:
function Add_numbers_1() {
    var A = 10;
    console.log(15 + A);
}
function Add_numbers_2() {
    console.log(A + 100);
}
Add_numbers_1();
Add_numbers_2();

//“If statements” are a type of conditional statement that specifies that a section of code is to be executed if a condition is true.
if (1 < 2){
    document.write("The left number is smaller than the number on the right")
}
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//The else statement specifies a block of code that will be executed if the condition is false (opposite of the if statement).
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//The “else if” statement follows an “if” statement and is executed if the “if” statement is found to be false
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time >0) {
        Reply = "It is moring time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}