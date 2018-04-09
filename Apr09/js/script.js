// function welcomeMsg(str) 
// {
//     // console.log(str);
//     return "Welcome " + str;
// }

// // consoleInfo('Name');
// console.log( welcomeMsg('Name') );


// function calcNums(x, y)
// {
//     // console.log(x + y);
//     return x + y;
// }

// console.log(calcNums(3,2));


// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');
// function concatStrings(str1, str2)
// {
//     return str1 + " " + str2;
// }

// function getFirstname()
// {
//     return prompt('What is your first name?');
// }

// function getLastname()
// {
//     return prompt('What is your last name?');
// }

// user.textContent = concatStrings(getFirstname(), getLastname());
// function welcomeUser()
// {
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// }

// welcomeUser();

var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
// console.log(spans.length);
var plurals = ['fish', 'monkeys', 'shoes', 'cactii'];
var adj = ['mysterious', 'repulsive', 'colossal'];
var num = ['27', '12', '66'];
var verb = ['slapped', 'punched', 'torn', 'flushed'];
var liquid = ['water', 'tears', 'OJ', 'smoothie'];
var famous = ['The Rock', 'Charles Manson', 'Keeanu Reaves', 'Jeff Goldbloom'];
var place = ['California', 'Italy', 'Prison', 'Iraq'];
var noun = ['Bush', 'Dory', 'Dinosouar', 'Cuba'];

for(var i=0; i < spans.length; i++)
{
    //  console.log(spans[i].className);
    // if(spans[i].className == 'plural')
    // {
        
    // }
    switch(spans[i].className)
    {
        case 'occupation':
            spans[i].textContent = occupations[getRandNum(occupations.length)];
            break;
        case 'plural':
            spans[i].textContent = plurals[getRandNum(plurals.length)];
            break;
        case 'adj': 
            spans[i].textContent = adj[getRandNum(adj.length)];
            break;
        case 'number': 
            spans[i].textContent = num[getRandNum(num.length)];
            break;
        case 'verb': 
            spans[i].textContent = verb[getRandNum(verb.length)];
            break;
        case 'liquid': 
            spans[i].textContent = liquid[getRandNum(liquid.length)];
            break;
        case 'famous': 
            spans[i].textContent = famous[getRandNum(famous.length)];
            break;
        case 'place': 
            spans[i].textContent = place[getRandNum(place.length)];
            break;
        case 'noun': 
            setText(spans[i], noun);
            break;
        default:
    }
}

function getRandNum(num)
{
    return Math.floor(Math.random() * num); 
}

function setText(currSpan, textArray)
{
    currSpan.textContent = textArray(getRandNum(textArray.length));
}