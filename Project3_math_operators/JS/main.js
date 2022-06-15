function add() {
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var sum = n1+n2;
document.getElementById("result").innerHTML=sum; 
}

function sub(){
    var n1 = parseInt(document.getElementById("n3").value);
    var n2 = parseInt(document.getElementById("n4").value);
    var thedifference = n1-n2;
    document.getElementById("difference").innerHTML=thedifference;
}

function multiply(){
    var n1 = parseInt(document.getElementById("n5").value);
    var n2 = parseInt(document.getElementById("n6").value);
    var theproduct = n1*n2;
    document.getElementById("product").innerHTML=theproduct;
}

function divide(){
    var n1 = parseInt(document.getElementById("n7").value);
    var n2 = parseInt(document.getElementById("n8").value);
    var thequotient = n1/n2;
    document.getElementById("quotient").innerHTML = thequotient;
}

function remainder(){
    var n1 = parseInt(document.getElementById("n9").value);
    var n2 = parseInt(document.getElementById("n10").value);
    var remainder = n1 % n2;
    document.getElementById("remainder").innerHTML = remainder;
}

function more_Math(){
    var simple_Math= (1+2)*10/2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function negation(){
    var x = parseInt(document.getElementById("negation").value);
    document.getElementById("negative").innerHTML = -x;
}

function increment(){
    var x = parseInt(document.getElementById("increment").value);
    x++;
    document.getElementById("incr").innerHTML = x;
}

function decrement(){
    var x = parseInt(document.getElementById("decrement").value);
    x--;
    document.getElementById("decr").innerHTML = x;
}


//Fix Math.random later  (works but removes the whole content of the page!)
function random(){
var x= document.write(Math.random() * 100);
document.getElementById("rndm").innerHTML = x;
}

//Meanwhile use this*********************************


//The math object is Math.ceil
window.alert(Math.ceil(Math.random()*100));

//To the power of!

function power(){
    var x1 = parseInt(document.getElementById("x1").value);
    var x2 = parseInt(document.getElementById("x2").value);
    var powerof = Math.pow(x1, x2);
    document.getElementById("pwr").innerHTML = powerof;

}





