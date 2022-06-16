function age(){
    var age, can_vote ; 
    age = parseInt(document.getElementById("age").value);
    can_vote = (age >= 18) ? "You're old enough":"You're not old enough";
    document.getElementById("voters").innerHTML = can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020,"Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in" + Erik.Vehicle_Year;
}

function Computers(Price, Make, Color,){
    this.Computers_Price = Price;
    this.Computers_Make = Make;
    this.Computers_Color = Color;
}

var Aaron = new Computers(2300,"Asus","Black");
var Dave = new Computers(1900,"Acer","White");
var John = new Computers(1600,"Dell","Green");

function cFunction(){
    document.getElementById("New_and_This").innerHTML = "Dave bought his pc for $" + Dave.Computers_Price + " and It's model is " + Dave.Computers_Make + " It's color is  " + Dave.Computers_Color;
}
/*Errors because var names are reserved!
function cup(Price, Color){
    this.var_Price = Price;
    this.true_Color = Color;
}

var var = new cup (15, "Red");
var true = new cup (16,"Black");

function aFunction(){
    document.getElementById("New").innerHTML = "This Code isn't gonna work anyways" + true.var_Price;
} */

//CountingFunctions
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}

function Person(Name, Height,Age){
    Fnctn(); {
        return (Name, Height, Age);
    }
}

/*Fix Tomorrow
var Dave = new Person(Dave, "6\'2", 26);
var John = new Person(John, "5\'7", 25);
var Ken = new Person(Ken, "5\'5", 19);

document.getElementById("Display").innerHTML = Fnctn();
*/







