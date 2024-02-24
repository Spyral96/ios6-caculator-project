//User imput nums

//Output Screen
userOutput = document.getElementById("numbers");

let currentNum="";
let maxNum;
let typedInNum="";


//numsButtons
let oneButton = document.getElementById("oneButton");
let twoButton = document.getElementById("twoButton");
let threeButton = document.getElementById("threeButton");
let fourButton = document.getElementById("fourButton");
let fiveButton = document.getElementById("fiveButton");
let sixButton = document.getElementById("sixButton");
let sevenButton = document.getElementById("sevenButton");
let eightButton = document.getElementById("eightButton");
let nineButton = document.getElementById("nineButton");
let zeroButton = document.getElementById("zeroButton");
//CacComamndsButtons
let clearButton = document.getElementById('clearButton');
let equalsButton = document.getElementById('equalsButton');
//Operators
let multButton = document.getElementById('multButton');
let divideButton = document.getElementById('divideButton');
let minusButton = document.getElementById('minusButton');
let addButton = document.getElementById('addButton');



oneButton.addEventListener('click',function()
{
    typedInNum = "1";
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

twoButton.addEventListener('click',function()
{
    typedInNum = "2"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

threeButton.addEventListener('click',function()
{
    typedInNum = "3"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

fourButton.addEventListener('click',function()
{
    typedInNum = "4"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

fiveButton.addEventListener('click',function()
{
    typedInNum = "5"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

sixButton.addEventListener('click',function()
{
    typedInNum = "6"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

sevenButton.addEventListener('click',function()
{
    typedInNum = "7"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

eightButton.addEventListener('click',function()
{
    typedInNum = "8"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

nineButton.addEventListener('click',function()
{
    typedInNum = "9"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

zeroButton.addEventListener('click',function()
{
    typedInNum = "0"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
});

clearButton.addEventListener('click',function()
{
    
    currentNum = "";
    capAmountOfNumbers ();
});


//To Not Let Number flow out of caculator

function capAmountOfNumbers ()
{
    if(currentNum.length > 11)
    {
        userOutput.textContent = currentNum.substring(0,11)
        console.log("max hit")
    }
    else if(currentNum.length <= 11)
    {
        userOutput.textContent = currentNum;    
    }
}

//Operator Functions
let secondNum="";
let operatorInUse = ""
function addOperator()
{
    secondNum = secondNum + currentNum;
    currentNum = "";
}

multButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "x";
    capAmountOfNumbers ();
    console.log(secondNum);
    console.log(currentNum);

});

divideButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "÷"
    capAmountOfNumbers ();
});

minusButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "-";
    capAmountOfNumbers ();
});

addButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "+";
    capAmountOfNumbers ();
});


//Caculation //Convert Strigns to Int so we can caculate

equalsButton.addEventListener('click',function()
{
    switch (operatorInUse) {
        case "x":
            resultNum = parseInt(currentNum) * parseInt(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            console.log(resultNum)
        break;

        case "÷":
            resultNum = parseInt(currentNum) / parseInt(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            console.log(resultNum)
        break;

        case "+":
            resultNum = parseInt(currentNum) + parseInt(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            console.log(resultNum)
        break;

        case "-":
            resultNum = parseInt(currentNum) - parseInt(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            console.log(resultNum)
        break;

        case "":

        break;


    }

    console.log(resultNum)
});

