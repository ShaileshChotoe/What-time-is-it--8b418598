let input = document.querySelector("input");
let message = document.querySelector("h3");
let p = document.querySelector("p");

const pi = 3.14;

showTime();


function showTime()
{
    p.innerText = "Het is: " + getTime();
}

function getTime()
{
    var date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}

function berekenOmtrek()
{
    return input.value * pi;
}

function berekenOppervlakte()
{
    let inputt = input.value;
    return (inputt * inputt * pi * 0.25);
}

function showMessage()
{
    message.innerText = "De omtrek van de circel is: " + berekenOmtrek() + " en de oppervlakte is: " + berekenOppervlakte();
}