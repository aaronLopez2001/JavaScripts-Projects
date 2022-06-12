

var B =("YOUR COMPUTER HAS MALWARE!!!!");

function My_First_Function() { //Creates a different font color whenever the button was pressed
    var str="Hello!" +'&nbsp' + B ;
    var result = str.fontcolor ("#115191");
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction() { //This concatenate the sentences
    var sentence="I am trying to";
    sentence += "&nbsp concatenate this sentence";
    document.getElementById("Concatenate").innerHTML = sentence;
}




