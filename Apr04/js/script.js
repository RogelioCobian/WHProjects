// /*

// function getUserName()
// {
//     var username = prompt("What is your full name?").split(" ");
//     // var splitUserName = username.split(" ");
//     // console.log(username);
//     outputUsername(username);
// }

// function outputUsername(nameArray)
// {
//     // console.log(nameArray);
//     // document.getElementById('firstName').innerHTML = nameArray[0];
//     // // Name Array['' , ''].length = 2
//     // document.getElementById('lastName').innerHTML = nameArray[nameArray.length - 1];

//     // This means OR  ||
//     for(var i = 0; i < nameArray.length; i++)
//     {
//         if( i == 0 || i == nameArray.length -1)
//         {
//             // console.log("We got the zeroth element!", nameArray[i]);
//             document.getElementById('firstName').innerHTML += nameArray[i] + " ";
//         }
//         // else
//         // {
//         //     console.log("not the zeroth");
//         // }
//     }
// }



// getUserName();

// */

// // Arrays 

// var cars = ["Jeep", "Sebaru" , "Honda"];

// console.log(cars[1]);
// console.log(cars.length);


// //Push Methods
// cars.push("BMW"); //Add to array
// console.log(cars);


// // Pop Meathod removes last thing from array
// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);

// console.log(removedCar);


// cars.unshift("Chevy", "Chrysler");
// console.log(cars);

// cars.shift();
// console.log(cars);

// // Spliece Meathod 
// cars.splice(1, 1, "red", "green");
// console.log(cars);

// cars.splice(1, 1, "Grape", "Kiwi", "Apple", "Carrot");
// console.log(cars);

// cars.splice(2, 1); 
// console.log(cars);

// // Slice Method (non-descructive)
// cars.slice(1);
// var removed = cars.slice(2, 6);
// console.log(cars);
// console.log(removed);





// var movies = ["The Pianst", "Seven", "The Wolf Children", "Short Term 12", "Training Day"];
// console.log(movies);



// movies.unshift("Die Hard");
// console.log(movies);

// movies.splice(2,2, "Godfather I", "Godfather II", "Godfather III");
// console.log(movies);

// movies.push("Gardians of the Galaxy");
// console.log(movies);

// var removedMovies = movies.slice(1, 3);
// console.log(removedMovies);

// movies.splice(1,1);
// console.log(movies);


// console.log(movies[movies.length -2]); 

// If ElseIf Else

// function getUserAge()
// {
//     var userage = parseInt(prompt("How old are you?"));
//     // And = && 
//     //  Or = ||
//     if(userage < 21)
//     {
//         console.log("Not old Enough!");
//     }
//     else if(userage == 21)
//     {
//         console.log("Good To Go!");
//     }

//     else    
//     {
//         console.log('Plenty Old');
//     }

// }

// getUserAge();

// //Turnary Operator


// function getAge()
// {
//     var age = prompt("What's my age again?");
//     (age >= "21") ? console.log('true') : console.log('false');
// }

// getAge();


// Write a function and prompt telling the user a "story" asking for 1 of 3 choices
// each choice continues to their own function
// Wash rinse repeat thrice more
// Simple Version:
// alerts, prompts, confirms
// Else / Else If / Else
// Complex Version: 
// Loops
// Arrays

