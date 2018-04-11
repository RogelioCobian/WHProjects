

// // this - context based. Look to the left of the dot.

// var btns; 
// btns = document.querySelectorAll('button');

// for(var i = 0; i < btns.length; i++)
// {
//     btns[i].addEventListener('click', function(evt){
//             // console.log(evt.target);
//             // console.log(this);
//     });
// }


// window.addEventListener('click', function(evt)
// {
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == 'BUTTON')
//     {
//         // console.log(evt.target);
//         // console.log(this);
//     }
// });


// var cars = ['jeep', 'honda', 'jeep', 'mini'];
// // console.log(cars);

// //Objects

// var car = {
//     type: 'jeep', 
//     model: 'wrangler',
//     color: 'black', 
//     offroad: true,
//     trim: ['sunroof', 'hardtop', '4 wheel drive']
// };
// // console.log(car.trim);

// var person = {
//     firstname: 'Roy', 
//     lastname: 'Cobian', 
//     height: "5'10", 
//     hair: true,
//     haircolor: 'black', 
//     facialhair: true, 
//     facialhaircolor: 'black', 
//     greeting: function(msg)
//     {
//         // console.log(this.firstname);
//         // console.log(msg + this.firstname);
//     }
// }

// var types = ['string', true, 5,, [1, 2, 3], person];

// person.middlename = 'Jeffrey';
// // console.log(person);
// // console.log(person.haircolor);
// person.middlename = 'Jeff';
// // console.log(person);

// person.greeting("Hola");

// person.firstname = 'Bruce';

// // person.greeting("I'm now ");


// // Object constructior object

// function Client(first, last, age, eye)
// {
//     this.firstname = first;
//     this.lastname= last; 
//     this.age = age; 
//     this.eyecolor = eye;
//     this.greeting = function(msg)
//     {
//         // console.log(msg + this.firstname);
//     };
// }

// var myDad = new Client('Jeff', 'C', 59, 'brown');
// // console.log(myDad);

// var myMom = new Client('June', 'C', 59, 'brown');
// // console.log(myMom);

// myMom.greeting('Hello'); 

/*
    username 
    email 
    password
*/
var form = document.querySelector('form');


var users = [];
// var user = 0;

function Account(username, email, password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

//var dude123 = new Account('Bill', 'dude123', 'password123');
// console.log(dude123);

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt)
{
    evt.preventDefault();
    // user++;
    users.push(new Account
    (
        form.elements[0].value, 
        form.elements[1].value,
        form.elements[2].value
    ));
    // console.log(users);
    // for (i =0; i<form.elements.length - 1; i++)
    // {
    //     user[i] = new Account();
    //     console.log(form.elements[i].value);
    // };

console.log(users);
})