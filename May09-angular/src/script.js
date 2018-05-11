const value = 5;

document.getElementById('test').innerHTML = 'EYE EM DA HOUSE ' + value;
if(value<10)
{
  document.getElementById('warning').innerHTML="Warning!";
}

const colors = ['red', 'orange', 'yellow', 'green'];
let result = '';
colors.forEach(eachColor => {
  result= result + ' ' + eachColor;

});

document.getElementById('colors').innerHTML = result;
