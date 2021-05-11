//The concat() method concatenates (connects) two or more strings.
function full_Sentence() {
    var part_1 = " I, Dominique,";
    var part_2 = " have made this ";
    var part_3 = "into a compelete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string.
function slice_Method() {
    var Sentence = "All work and no play makes Jonny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
// this is the uppercase function. The toUpperCase() method converts a string to uppercase letters.
function UpperFunction() {
    var str = "Aggie Pride!";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}
//The search() method searches a string for a specified value, and returns the position of the match.
function SearchFunction() {
    var str = "Visit A&T University!";
    var n = str.search("A&T");
    document.getElementById("search").innerHTML = n;
}
//Number methods assist you in working with numbers. There are several types – one is the “toString()” method that returns a number as a string.
function string_Method() {
    var X =190;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//The toPrecision() method formats a number to a specified length.
function Precision_Method() {
    var A = 12938.30858884848484757558;
    document.getElementById("Precision").innerHTML = A.toPrecision(10);
}