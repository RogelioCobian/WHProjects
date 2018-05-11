// var firstname = 'matt';

// function whatsName()
// {
//     var lastname = 'higley';
//     console.log(firstname);
//     // whatsLastname(lastname);
// }
// whatsName();

// // console.log(lastname);

// // var 
// // let 
// // const
// const name = 'matt';
// let color = 'grey';

// for(let i=0; i <5; i++)
// {
//     console.log('running ' + i + ' times');
// }

// function whatsLastname(str)
// {
//     console.log(str);
//     console.log(i);
// }

// // console.log(i);

// // for(i; i<10; i++)
// // {
// //     console.log('running again ' + i + ' times');
// // }
// let firstName = 'Matt'; 
// let lastName = 'Higley';
// let nameCombined = `${firstName} David ${lastName}`;
// console.log(nameCombined);

// let btn = document.querySelector('button');
// // console.log(btn);
// btn.addEventListener('click', function(evt)
// {
//     console.log(this);
//     var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str)
// {
//     console.log(str);
// }
// logCase('matt');

var colors = ['red', 'orange', 'green', 'blue'];

for(let i=0; i<colors.length; i++)
{
    console.log(colors[i]);
}

// Javascript forEach loop
colors.forEach(function(x, y)
{
    console.log(x, y);
});

// For of loop
var nums = [10, 20, 30, 40];
for(let num of nums)
{
    num += 1;
    console.log(num);
}

let myName = 'Matt Higley';
for(let letter of myName)
{
    console.log(letter);
}