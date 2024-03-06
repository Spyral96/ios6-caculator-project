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

//CLEAR ALL RESET
/////////////////////////////////////////////////
clearButton.addEventListener('click',function()
{
    secondNum ="";
    currentNum = "";
    capAmountOfNumbers ();
    multipleOperators = false;
    totalOperatorClicked = 0;
    runOffCaculationMode = false;
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
let operatorInUse = "";
let numbers = [];


function addOperator()
{
    equalsButtonClickedMoreThanOnce = false;
    equalsButtonClicked = false;
    secondNum = secondNum + currentNum;
    currentNum ="";
}

multButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "x";
    capAmountOfNumbers ();
    
    if(totalOperatorClicked >= 2)
    {
    doRunOffCaculations();
    }
    

});

divideButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "÷"
    capAmountOfNumbers ();
    doRunOffCaculations();
});

minusButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "-";
    capAmountOfNumbers ();
    doRunOffCaculations();
});

addButton.addEventListener('click',function()
{
    addOperator();
    operatorInUse = "+";
    capAmountOfNumbers ();
    doRunOffCaculations();
});


//Caculation //Convert Strings to Int so we can caculate

//So We can add more operators without erroring out(ex 5+5= 10 then -1) NOTE THIS IS NOT 5+5 update -1. the user needs to hit the equals sign.
multipleOperators = false;
equalsButtonClicked = false;
//so if the user spams the equals button it does not error out
equalsButtonClickedMoreThanOnce = false;
let resultNum = "";
equalsButton.addEventListener('click',function()
{
    //reset total clicks becuase we are not doing run off caculuations. We are using ='s. CHECK LINE 296
    
    equalsButtonClicked = true;


    switch (operatorInUse) {
        case "x":

            if(multipleOperators === false && equalsButtonClicked === true && equalsButtonClickedMoreThanOnce ===false)
            {   
                resultNum = parseInt(currentNum) * parseInt(secondNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                console.log(resultNum)
                multipleOperators = true;
                equalsButtonClickedMoreThanOnce = true;
            }

            else if(multipleOperators === true && runOffCaculationMode === false &&equalsButtonClickedMoreThanOnce === false)
            {
                resultNum = parseInt(currentNum) * parseInt(resultNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                console.log(resultNum);
                equalsButtonClickedMoreThanOnce = true;

                
            }
            else{};
        break;

        case "÷":
            if (multipleOperators === false && runOffCaculationMode === false)
            {
                if (currentNum === "0")
                {
                    resultNum = "error";
                    userOutput.textContent = resultNum;
                    currentNum = "";
                    secondNum = "";
                }
                else {resultNum = parseInt(secondNum)/ parseInt(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                multipleOperators = true;
                }
            }
            else if (multipleOperators === true && runOffCaculationMode === false)
            {
                if(currentNum === "0")
                {
                    resultNum = "error";
                    userOutput.textContent = resultNum;
                    currentNum = "";
                    secondNum = "";
                    multipleOperators = false;
                }
                else 
                {
                resultNum = parseInt(resultNum)/ parseInt(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                console.log(resultNum);
                
                }
            }
            else{};
        break;

        case "+":
            if (multipleOperators === false && runOffCaculationMode === false)
            {
            resultNum = parseInt(currentNum) + parseInt(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            multipleOperators = true;
            }

            else if (multipleOperators === true && runOffCaculationMode === false)
            {
            resultNum = parseInt(currentNum) + parseInt(resultNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            }
            else{};
        break;

        case "-":
            if(multipleOperators === false && runOffCaculationMode === false)
            {    
            resultNum = parseInt(secondNum) - parseInt(currentNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            //After the equation is done we can add operators to our answer
            multipleOperators = true;
            }
            else if (multipleOperators === true && runOffCaculationMode === false)
            {
                resultNum = parseInt(resultNum) - parseInt(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);   
            }
            else{};
        break;

        case "":

        break;


    }
    console.log(resultNum)
    console.log(currentNum);
    console.log(secondNum);
    
});


//Being able to add numbers in succestion and not have to hit the equals button (RUNOFF CACULATION)
let totalOperatorClicked = 0;
let runOffCaculationMode = false;
//this make it so other code doesn't get in the way(safegaurd to prevent bugs)

function doRunOffCaculations()
{
    
    console.log(totalOperatorClicked) + " is total";
    console.log(currentNum + "  is current");
    console.log(secondNum + " is sec Num");
    console.log(resultNum +" is results");
    console.log(runOffCaculationMode);
    

    switch (operatorInUse)
    {
        

        case "x":
        if (equalsButtonClicked === false && secondNum !== "")
        {
            resultNum = parseInt(currentNum) * parseInt(secondNum); 
             userOutput.textContent = resultNum.toString().substring(0,11);
            currentNum = "";

        }
        else if(totalOperatorClicked >= 3)
        {
            resultNum = parseInt(currentNum) * parseInt(resultNum);        
            userOutput.textContent = resultNum.toString().substring(0,11);  
            currentNum = "";
        }
        else {userOutput.textContent = currentNum.toString().substring(0,11);}

        break;
        case "/":
            if (totalOperatorClicked === 2 )
            {
                resultNum = parseInt(secondNum) / parseInt(currentNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
            else if(totalOperatorClicked >= 3)
            {
                resultNum = parseInt(resultNum) / parseInt(currentNum);
                currentNum = "";
                        
                userOutput.textContent = resultNum.toString().substring(0,11);  
        
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);}
        break;
        
        case "+":
            if (totalOperatorClicked === 2 )
            {
                resultNum = parseInt(currentNum) + parseInt(secondNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
            else if(totalOperatorClicked >= 3)
            {
                resultNum = parseInt(currentNum) + parseInt(resultNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);  
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);}
        break;

        case "-":
            if (totalOperatorClicked === 2 )
            {
                resultNum = parseInt(secondNum) - parseInt(currentNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
            else if(totalOperatorClicked >= 3)
            {
                resultNum = parseInt(resultNum) - parseInt(currentNum);
                currentNum = ""; 
                userOutput.textContent = resultNum.toString().substring(0,11);  
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);}
        break;

        case"":
        break;
    }
}

