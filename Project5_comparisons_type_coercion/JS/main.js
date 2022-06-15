document.write(typeof 8);
function my_Function(){
    document.getElementById("Test").innerHTML =0/0;
}
function test(){
    document.getElementById("test").innerHTML = isNaN('This is a string');
    
}
function tests(){
    document.getElementById("tests").innerHTML = isNaN(007);    
}

document.write(5E310);
document.write(-7E310);
document.write(10>2);
document.write(10<2);

function greater(){
    var x1 = parseInt(document.getElementById("n1").value);
    var x2 = parseInt(document.getElementById("n2").value);
    var res = x1 > x2;
    document.getElementById("resulthere").innerHTML = res;
}


function less(){
    var x1 = parseInt(document.getElementById("n3").value);
    var x2 = parseInt(document.getElementById("n4").value);
    var res = x1 < x2;
    document.getElementById("Rslt").innerHTML = res;
}

console.log (2 + 2);

//Coercion

console.log ("2" + 5);
console.log (5 > 10);

console.log ((10*15)== 105);
console.log ((10/5)==2);

//Both data types and value are the same
X = 10;
Y = 10;
console.log(X === Y);
//Different Value and Data types
X = "Five";
Y = 10;
console.log(X === Y);
//Same Value but different Data types
X = "Ten";
Y = 10;
console.log(X === Y);
//Same data types but different Value
X = "Ten";
Y = "Five";
console.log (X === Y);
//AND
console.log(10>5 && 5>3);
//OR
console.log(5>15 || 5<15);
//NOT
function not(){
    document.getElementById("NOT").innerHTML = !(7>9);
}