function welcome()
{
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

// welcome();

function fireworks() 
{
    document.getElementById('h1').style.backgroundImage = "url('/img/firework.gif')"; 
    document.getElementById('h1').style.color = "";
    toggleColor();
    navish();
}

function toggleColor()
{
    // document.body.classList.add('colorize'); //Add a classname 

    document.body.classList.toggle('colorize'); //toggle a classname 
}
