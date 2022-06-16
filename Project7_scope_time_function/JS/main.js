
//Global var
var x = "String";
function test(){
    var y = 15;
    document.write(x + y);
} 

function test2(){
    console.log(y + 15);
}
test();
test2();


//Some code might be different as I've tried to do it before the Else If Module! and I have just modified it
function get_Date(){
    var Time = new Date().getHours();
    var Reply;
    if ( Time < 12 ==  Time >= 0 ) {
        document.getElementById("Greetings").innerHTML = "Good Morning!";
    }
    else if( Time >= 12 == Time < 18 ) {
        document.getElementById("Greetings").innerHTML = "Good Afternoon!";
    }
    else {
        document.getElementById("Greetings").innerHTML = "Good Evening!";
    }
}

function get_Date(){
    if (new Date().getHours() > 19 ); {
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}

function getTime(){
    if (new Date().getDate() == 05/10/2022 ){
        document.getElementById("Time").innerHTML = "Happy Birthday";
    }
    else {
        document.getElementById("Time").innerHTML = "It's not your Birthday yet";

    }
}

function guesser(){
    var num = parseInt(document.getElementById("n1").value);
    if (document.getElementById("n1").value == 20){
        document.getElementById("Guess").innerHTML = "That is correct I am 20 years old!";
    }
    else {
        document.getElementById("Guess").innerHTML = "That is incorrect I am not " +  num + " years old";
    }

}