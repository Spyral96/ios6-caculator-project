//User imput nums

//Output Screen
userOutput = document.getElementById("numbers");

let currentNum="";
let maxNum;
let typedInNum="";

let oneButton = document.getElementById("oneButton");
let twoButton = document.getElementById("twoButton");
threeButton = document.getElementById("threeButton");
fourButton = document.getElementById("fourButton");
fiveButton = document.getElementById("fiveButton");
sixButton = document.getElementById("sixButton");
sevenButton = document.getElementById("sevenButton");
eightButton = document.getElementById("eightButton");
nineButton = document.getElementById("nineButton");
zeroButton = document.getElementById("zeroButton");

oneButton.addEventListener('click',function()
{
    typedInNum = "1"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

twoButton.addEventListener('click',function()
{
    typedInNum = "2"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    console.log(currentNum.length)
    
});

//To Not Let Number flow out of caculator

function capAmountOfNumbers ()
{
    if(currentNum.length > 11)
    {
        maxNum = currentNum;
        userOutput.textContent = currentNum.substring(0,11)
        console.log("max hit")
    }
    else if(currentNum.length <= 11)
    {
        userOutput.textContent = currentNum;    
    }
}
