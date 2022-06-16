function concat(){
    var a = " This ";
    var b = " creates";
    var c = " a";
    var d = " sentence";
    var whole = a.concat(b, c , d);
    document.getElementById("methods").innerHTML = whole;

}

function slice_method(){
    var sentence = "All work and no play makes Johnny a dull boy.";
    var Section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;0

}

function slice(){
    var sentence = "What is the meaning of life";
    var Section = sentence.slice(12,19);
    document.getElementById("slc").innerHTML = Section;
}

function toUpper(){
    var sentence = "Turn these to upper case."
    var Res = sentence.toUpperCase();
    var position = sentence.search("upper");
    document.getElementById("upper").innerHTML = Res;
    document.getElementById("search").innerHTML = position;
}

function string_Method(){
    var x = 503;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method(){
    var x = 15232.21312367123876123;
    document.getElementById("Precision").innerHTML = x.toPrecision(8);
}
//Returns the value of a specified number into a 2 decimal points
function decimal(){
    var x = parseInt(document.getElementById("n1").value);
    var res =  x.toFixed(2);
    document.getElementById("Result").innerHTML = res; 
}
//ValueOf REturns the primitive value.
function val(){
    var string = new String("Hello World")
    var number = new Number(578);
    console.log(string);
    console.log(string.valueOf());
    console.log(number);
    console.log(number.valueOf());
}

val();

