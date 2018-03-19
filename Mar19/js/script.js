// document.getElementById('btn2').style.color = "red";

// document.getElementById('btn2').style.fontSize = "32px";


console.log("Here is my first console message");
console.info("This is info"); 
console.warn("Danger");
console.error("Nope. You done goofed!");

// Browser Alert Box
// alert('Here is my popup.');

// Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);


// Browser Prompt Boxes
// var namePrompt = prompt("What is your name?");
// console.log(namePrompt);


/*
Variables 
    Must start with a lowercase
    Must Start with a letter. 
    Can Contain underscore
    May use camelCasing
*/

// Math
var username; 
var room1; 
var user_name; 
var userName;
var theUserFirstNameOnly;

var age = 27 ; 
var decade = 10; 
var double = 2; 
var quarter = 4

var newAge = (age + decade) * double / quarter;
// PEMDAS matters!
console.log(newAge);

// Concatination 

// var firstName = prompt("What is your first name"); 
// var lastName = prompt("What is your last name?");
// alert(firstName + " " + lastName);

/* 

Interpolation 
    ${variable}
alert(`${firstName}  ${lastName}`);

*/


// Prompt user for 
// make of the vehicle 
// the year 
// the color 
// alert the result 

// three new var 
// formatting: color, year make.

function getUserVehicle()
{
    var make = prompt("What is the make of your vehicle?");
    var year = prompt("What is the year the vehicle"); 
    var color = prompt("What color is it?");

    var result = color + ", " + year + " " + make +".";
    alert(result);
}

function primaryUser()
{
    var first = prompt("What is your first name?"); 
    var last = prompt("What is your last name?");
    var place = prompt("Where where you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}

function primaryColors()
{
    var firstColor = prompt("What is your favorite color?");
    var secondColor = prompt("What is the color you hate?");
    var thirdColor = prompt("What is your meh color?");

    document.getElementById('primaryColor').innerHTML = "Favorite color " + firstColor + " Hates " + secondColor + ", but " + thirdColor + " is meh.";
}

function movies()
{
    var firstMovie = prompt("What is your favorite movie?");
    var secondMovie = prompt("What is your second favorite movie?");
    var thirdMovie = prompt("What is your third favorite movie?");

    document.getElementById('favoriteMovies').innerHTML = "The Top Three Movies Are: " + firstMovie + " " + secondMovie + " " + thirdMovie + ".";
}