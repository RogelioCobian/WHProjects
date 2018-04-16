var character = {
    violence: 0,
    charisma: 0,
    bargining: 0,
    intellegence: 0, 
    sneak: 0,
}

var storyline = 0;
var branch = document.getElementById('branchOne');
var branchTwo = document.getElementById('branchTwo');
var branchThree = document.getElementById('branchThree');

var textBox = document.getElementById('textBox');
var button = document.getElementById('submit');
button.addEventListener('click', homer);

function homer()
{
    // Homer, Dante, Virgil
    var getValue = textBox.value;
    virgil(getValue);
}

function virgil(getValue)
{
    console.log(getValue);
    if(getValue == 'go to lunch')
    {
        branch.innerHTML = "<br>You decide to ignore the call, maybe it wasn't that important. What is important, however, is lunch! What type of food are you craving? <br> <br> >Mexican Food <br> >Chinese food";
    }
    if(getValue == 'mexican food' || getValue == 'chinese food')
    {
        window.alert("While on the way you hear someone yelling in shock. Someone has jumped, and it's your fault. Game Over!");
        location.reload();
    }

    if(getValue == 'go to address')
    {
        branchTwo.innerHTML = "You rush to the address and you see the blaring lights of police cars. They are surrounding a building. <br><br> >Go Inside Building <br> >Talk To Police ";
    }
    // Continue Story Here.
    if(getValue == '')
    {
        branchTwo.innerHTML = "DLC because we're EA";
    }
    if(getValue == '')
    {
        branchTwo.innerHTML = "DLC because we're EA";
    }
    if(getValue == '')
    {
        branchTwo.innerHTML = "DLC because we're EA";
    }
    if(getValue == '')
    {
        branchTwo.innerHTML = "DLC because we're EA";
    }
    // else()
    // {
        
    // }
}
virgil();
