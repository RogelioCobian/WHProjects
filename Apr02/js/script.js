// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);

// pByClassname[0].style.fontSize = '32px';

// var pByTagName = document.getElementsByTagName('p');
// console.log(pByTagName);
// // pByTagName[9].style.color = 'yellow';
// console.log(pByTagName.length);


// //For loop
// //  [-----------------] Arguments
// //  [------] New Var
// //           [---] Number of loops
// //                 [-] Incrementor
// for(var i=0; i<10; i++)
// {
//     pByTagName[i].style.color = 'red';
//     console.log(i);
// }

// // Create a var of your name
// // Using the length of your name
// // console each index to the browser 

// var myName = "Roy";
// console.log(myName.length);

// for(var i=0; i<myName.length; i++)
// {
//     console.log(i);
//     console.log(myName[i]);
// }

// Create a function that promts the user for their name
// Create a seprate function that loops through each letter logging into the browser

/* 
function func1()
{
    func1(passUserName){}
}

function func2(getUsersName)
{
    console.log(getUsersName);
}

*/

// My Code

// var username = prompt("What is your name?");
// function name() 
// {
//     for(var i=0; i<username.length; i++)
//     {
//         console.log(i);
//         console.log(username[i]);
//     }   
// }
// name();

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// function name() 
// {
//     for(var i=0; i<firstName.length + lastName.length; i++)
//     {
//         console.log(i);
//         console.log(firstName[i] && lastName[i]);
//     }   
// }
// name();





// function getUserName()
// {
//     var username = prompt("Your Name");
//     console.log(username + ' From inside the function');


//     printUsername(username);  //Argument
// }
// getUserName();


// function printUsername(x) //parameter
// {
//      for(var i = 0; i<x.length; i++)
//      {
//          console.log(x[i]);
//      }
// }

//Get users two numbers 
// function getUserNums()
// {
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);

// }

// // Alert added numbers 
// function addUserNums(x, y)
// {
//     console.log(arguments);
//     // alert( parseInt(x) + parseInt(y));
// }

// getUserNums();


// Write a function that asks the user for three colors
// Write anotheer function that loops through "arguments" array
// applt each color to corresponding paragraph

/*

['p', 'p', 'p']
['red', 'green', 'blue']

p1.color = red; 
p1.color = green ;
Path2D.color = blue;

*/

var paragraphs = document.querySelectorAll('p');

function getUserColors()
{
    var userColors = prompt('Pick some colors (comma separated)').split(',');
    var userTrimmedColors = []; 


    for(var i = 0; i < userColors.length; i++)
    {
        userTrimmedColors.push(userColors[i].trim())
    }
    console.log(userColors.split(",").trim());
    // var color1 = prompt('What is your first favorite color?');
    // var color2 = prompt('What is your second favorite color?');
    // var color3 = prompt('What is your third favorite color?');

    assignUserColors(userTrimmedColors);
}

function assignUserColors(x)
{
    for(var i=0; i<arguments.length; i++)
    {
        paragraphs[i].style.color = arguments[i];
    }
}

getUserColors();