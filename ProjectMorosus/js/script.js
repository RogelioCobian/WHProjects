var Q1 = document.querySelectorAll('input[type="radio"][name="Q1"]');
var Q2 = document.querySelectorAll('input[type="radio"][name="Q2"]');
var Q3 = document.querySelectorAll('input[type="radio"][name="Q3"]');
var Q4 = document.querySelectorAll('input[type="radio"][name="Q4"]');
var Q5 = document.querySelectorAll('input[type="radio"][name="Q5"]');
var Q6 = document.querySelectorAll('input[type="radio"][name="Q6"]');
var Q7 = document.querySelectorAll('input[type="radio"][name="Q7"]');
var Q8 = document.querySelectorAll('input[type="radio"][name="Q8"]');
var Q9 = document.querySelectorAll('input[type="radio"][name="Q9"]');
var Q10 = document.querySelectorAll('input[type="radio"][name="Q10"]');
var submit = document.querySelector('button');
clear();
function clear()
{
    for (var i=0; i<Q1.length; i++)
    {
        Q1[i].checked = false;
    }
    for (var i=0; i<Q2.length; i++)
    {
        Q2[i].checked = false;
    }
    for (var i=0; i<Q3.length; i++)
    {
        Q3[i].checked = false;
    }
    for (var i=0; i<Q4.length; i++)
    {
        Q4[i].checked = false;
    }
    for (var i=0; i<Q5.length; i++)
    {
        Q5[i].checked = false;
    }
    for (var i=0; i<Q6.length; i++)
    {
        Q6[i].checked = false;

    }
    for (var i=0; i<Q7.length; i++)
    {
        Q7[i].checked = false;
    }
    for (var i=0; i<Q8.length; i++)
    {
        Q8[i].checked = false;
    }
    for (var i=0; i<Q9.length; i++)
    {
        Q9[i].checked = false;
    }
}





submit.addEventListener('click', send);

function send()
{
    // console.log(Q1);
    for (var i=0; i<Q1.length; i++)
    {
        if(Q1[i].checked)
        {
            var valueOne = parseInt(Q1[i].value);
        }
    }
    for (var i=0; i<Q2.length; i++)
    {
        if(Q2[i].checked)
        {
            var valueTwo = parseInt(Q2[i].value);
        }
    }
    for (var i=0; i<Q3.length; i++)
    {
        if(Q3[i].checked)
        {
            var valueThree = parseInt(Q3[i].value);
        }
    }
    for (var i=0; i<Q4.length; i++)
    {
        if(Q4[i].checked)
        {
            var valueFour = parseInt(Q4[i].value);
        }
    }
    for (var i=0; i<Q5.length; i++)
    {
        if(Q5[i].checked)
        {
            var valueFive = parseInt(Q5[i].value);
        }
    }
    for (var i=0; i<Q6.length; i++)
    {
        if(Q6[i].checked)
        {
            var valueSix = parseInt(Q6[i].value);
        }
    }
    for (var i=0; i<Q7.length; i++)
    {
        if(Q7[i].checked)
        {
            var valueSeven = parseInt(Q7[i].value);
        }
    }
    for (var i=0; i<Q8.length; i++)
    {
        if(Q8[i].checked)
        {
            var valueEight = parseInt(Q8[i].value);
        }
    }
    for (var i=0; i<Q9.length; i++)
    {
        if(Q9[i].checked)
        {
            var valueNine = parseInt(Q9[i].value);
        }
    }
    var totalValue = valueOne + valueTwo + valueThree + valueFour + valueFive + valueSix + valueSeven + valueEight + valueNine;
    response(totalValue);
}

function response(totalValue)
{
    // console.log(totalValue);
    if(totalValue <= 4)
    {
        console.log('minimal');
        window.open("https://symptoms.webmd.com/#/info"); 
    }

    if(totalValue > 4 && totalValue <= 9)
    {
        console.log('mild');
        window.open("https://www.verywellmind.com/what-is-mild-low-grade-depression-1066956"); 
    }

    if(totalValue > 9 && totalValue <= 14)
    {
        console.log('moderate');
        window.open("https://study.com/academy/lesson/what-is-moderate-depression-definition-symptoms-treatment.html"); 
    }

    if(totalValue > 14 && totalValue <= 19)
    {
        console.log('moderatly severe');
        window.open("https://www.nice.org.uk/guidance/cg90/ifp/chapter/treatments-for-moderate-or-severe-depression"); 
    }

    if(totalValue >19 && totalValue <= 27)
    {
        console.log('sever');
        window.open("https://www.mentalhelp.net/articles/depression-hotline/"); 
    }
    else
    {
        alert('Please finish the test');
    }

}