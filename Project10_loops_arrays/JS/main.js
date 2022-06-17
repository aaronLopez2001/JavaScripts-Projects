//Remove function rtn() to stop the code from working
function rtn(){
    return "Goodbye"
}

console.log(rtn);

function Call_Loop(){
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


let text = "asdasdhjfjjsaedfkjnsdfnjksdfnjksdnjk";
let lenght = text.length;
console.log(text.length);

var Instruments = ["Guitar","Trombone", "Piano", "Banjo" ];
var Content = "";
var Y;
function for_Loop(){
    for(Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){
    var Computer = []
    Computer [0] = "Turned off";
    Computer [1] = "Turned on";
    Computer [2] = "Rebooting";
    Computer [3] = "Broken";
    document.getElementById("Array").innerHTML = "The Computer is " + Computer[3];
}

function constant_function(){
    const Jason = {age: 25, height: "5\'6", eyeColor:"Red", weight: "78kg"};
    Jason.age = 25;
    Jason.height = "5\'6";
    Jason.eyeColor = "Blue";
    Jason.weight = "78kg"
    document.getElementById("Constant").innerHTML = "Jason is " + Jason.age + " years old " + "his height is " + Jason.height + " and the color of his eyes are " + Jason.eyeColor + " and he weighs about " + Jason.weight;
    
}

var X = 50;
console.log(X)
{
    let X = 20;
    console.log(X)
}

console.log (X);

let character = {
    movement: ["Run", "Walk", "Jump", "Attack"],
    height: "5\'5",
    description: function(){
        return "This character can " + this.movement + " and has a height of " + this.height+".";
    } 
};
document.getElementById("Character object").innerHTML = character.description();

let num = "";
for (let i = 0; i < 11; i++)
{
    if (i === 3) break;
    num += i + "<br>";
}

let numbr = "";
for (let i = 0; i < 11; i++)
{
    if (i === 3) continue;
    numbr += i + "<br>";
}






document.getElementById("lp").innerHTML = num;
document.getElementById("a").innerHTML = numbr;

