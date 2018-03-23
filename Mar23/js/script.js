
/*
In your JS file:
    - Create 10 variables targeting each of the ID'd elements
    - Create 5 "click" eventListeners. 1 for each of the buttons && 1 for each of the <a> tags
    - Write 5 functions:
        - 1 that toggles the navigation from horizontal orientation to vertical
        - 2 that changes the text color of the clicked <a> tag 
*/

//All var with targets here 


var nav = document.getElementById("navagation");
var title = document.getElementsByClassName("title");
var text = document.getElementById("text");
var linkOne = document.getElementById("linkone");
var linkTwo = document.getElementById("linkTwo");
var name1 = prompt("What is you name?");
var back = document.body.style.backgroundColor = ("#b4d3e8");
var navish = document.getElementById('navish1');

//place all eventlisteners here 


// Place all functions here

function name()
{
    document.getElementById('name1').innerHTML = name1;
}
name();
function double() 
{
    document.getElementById('nameOne').style.fontWeight = "100";
    document.getElementById('nameOne').style.color = "red";
}


