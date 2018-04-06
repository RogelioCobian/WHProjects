// Math object 

// Intergers -Whole numbers
// Floats - Decimals 

var wha = .1 * .2;
// 0.020000000000000004
var rounded = Math.round(0.000001);
// .49 && below rounds down 
// .5 && up rounds up


// Math.ceil();
var roundedUp = Math.ceil(0.0000001);

var roundedDown = Math.floor(0.999999999);

// Math.PI();
var pi = Math.PI;

// Math,pow(); 
// console.log(Math.pow(8, 2));

// Math.sqrt(); 
// console.log(Math.sqrt(64));

// Math.random();
// console.log(Math.random());

// console.log(rounded, roundedUp, roundedDown, pi);

// Random number generator 

/*
var ran = Math.random();
ran = Math.floor(ran * 11);
console.log(ran);

function pickANum()
{
    var userNum = prompt('Guess a number between 0 and 10');
    checkNum(userNum);
}

pickANum();

function pickAnotherNum()
{
    var userNum = prompt('Guess again');
    checkNum(userNum);
}
function checkNum(num)
{
    if(num < ran)
    {
        alert(num + ' is too low. Pick again!');
        pickAnotherNum();
    } 
    else if(num > ran)
    {
        alert(num + ' is too high. Pick again!');
        pickAnotherNum();
    } 
    else
    {
        alert(num + ' is the right number! Fun game, right?!');
    }
}
*/

var userPick = document.getElementById('userPick');

var submitBTN = document.getElementById('sub');

var userPickResult = document.querySelector('h1');

var resetButton; 
var attempts; 
attempts = 3;

resetButton = document.getElementById("replay");

//Global var
var ran;

// This is in the wrong place
/*
ran = Math.random();
ran = Math.floor(ran * 11);
*/

submitBTN.addEventListener('click', getUserPick);
resetButton.addEventListener('click', randomNum);
// CLUE: where we can GET a value, we can also SET a value

function randomNum ()
{
    getRanColor();
    ran = Math.random();
    ran = Math.floor(ran * 11);
    attempts = 3;
    userPickResult.innerHTML = ' ';
}
randomNum();

function getUserPick() 
{
    attempts = attempts - 1;
    var userNum = (parseInt(userPick.value));
    checkUserPick(userNum);
    userPick.value = '';
}

function checkUserPick(x)
{
    if(attempts > 0)
    {
        if(x < ran)
        {
            printUserRes(x + ' is too low. Pick again!');
            
        } 
        else if(x > ran)
        {
            printUserRes(x + ' is too high. Pick again!');
        } 
        else if (x == ran)
        {
            printUserRes(x + ' is the right number! Fun game, right?!');
        }
        else 
        {
            printUserRes('Wrong Answer');
        }
    }
    else 
    {
        printUserRes('Game Over');
    }
}

function resetNum()
{
    getUserPick();
    userPickResult.innerHTML = ' ';
}


 function printUserRes(userRes)
 {
     userPickResult.innerHTML = userRes;
    
 }


//  Add another button that will run a function to reset the random number 
// On load, pick a new random number
// after number has been  picked 
// Run a functio that sets the background-color 
// Tip : hsl(x, 50%, 50%);
// Bonus: reset the color when the user resets the game 

/*
var ranTwo; 

function randomNumTwo()
{
    ranTwo = Math.random();
    ranTwo = Math.floor(ranTwo * 11);
    backgroundChanger();
}
randomNumTwo();
console.log(ranTwo);
function backgroundChanger()
{
    if (ranTwo == 0)
    {
        document.body.style.backgroundColor = 'red';
    }
    if (ranTwo == 1)
    {
        document.body.style.backgroundColor = 'green';
    }
    if (ranTwo == 2)
    {
        document.body.style.backgroundColor = 'blue';
    }
    if (ranTwo == 3)
    {
        document.body.style.backgroundColor = 'purple';
    }
    if (ranTwo == 4)
    {
        document.body.style.backgroundColor = 'pink';
    }
    if (ranTwo == 5)
    {
        document.body.style.backgroundColor = 'teal';
    }
    if (ranTwo == 6)
    {
        document.body.style.backgroundColor = 'magenta';
    }
    if (ranTwo == 7)
    {
        document.body.style.backgroundColor = 'brown';
    }
    if (ranTwo == 8)
    {
        document.body.style.backgroundColor = 'grey';
    }
    if (ranTwo == 9)
    {
        document.body.style.backgroundColor = 'crimson';
    }
    if (ranTwo == 10)
    {
        document.body.style.backgroundColor = 'cornflowerblue';
    }
}
*/
var ranColor;

function getRanColor()
{
    ranColor = Math.random();
    ranColor = Math.floor(ranColor * 360);
    document.body.style.backgroundColor = 'hsl(' + ranColor + ', 50%, 50%)';
    console.log(ranColor);
}
getRanColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e)
{
    var width = Math.round((e.x / window.innerWidth) * 100); 
    var height = Math.round((e.y / window.innerHeight) * 100);
    document.body.style.backgroundColor = 'hsl(' + ranColor + ',' + width + '%, ' + height + '%)';
    // document.body.style.backgroundColor = 'hsl(${ranColor}, )'

    // console.log('x-axis: ' + Math.round((e.x / window.innerWidth)) * 100 , 'y-axis: ' + Math.round((e.y / window.innerHeight) * 100));
});