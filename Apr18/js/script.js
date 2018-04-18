// var paras = document.querySelectorAll('p');
// // paras.classList.add.contains('classname');


// // ! == not

// /*
// for(var i = 0; i < paras.length; i++)
// {
//     // console.log(paras[i].classList.contains('para'));
//     if(!paras[i].classList.contains('para'))
//     {
//         console.log('thats not true');
//     }
// }
// */

// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));


// // == loose comparison
// // === strict comparison

// var usernum = parseInt(prompt('Pick a number'));

// if(!usernum )
// {
//     console.log(3 + usernum);
// }
// else
// {
//     console.log('Please enter something');
// }


// if()



// XMLHttpRequest

var weatherKey = '3b07796f62c0cb73f6bc5976df150f07';
var myUL = document.querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();

req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3b07796f62c0cb73f6bc5976df150f07 ');
req.onload = function()
{
    if(req.readyState === 4)
    {
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
};
req.send(null);


function processData(data)
{
    // console.log(data.list);
    for(var i = 0; i < data.list.length; i++)
    {
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay = data.list[i].dt;
        console.log(data.list[i]);
        var myLi = `
        <li>
            <p> ${weatherDesc} </p>
        </li>
        `;
        myUL.innerHTML += myLi;
    }
}