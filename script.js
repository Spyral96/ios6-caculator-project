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
//Decimal
let decimalButton = document.getElementById('decimalButton')

//See if digits are pressed.So we can sequence and prevent errors
let digitClicked;
oneButton.addEventListener('click',function()
{
    typedInNum = "1";
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

twoButton.addEventListener('click',function()
{
    typedInNum = "2"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

threeButton.addEventListener('click',function()
{
    typedInNum = "3"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

fourButton.addEventListener('click',function()
{
    typedInNum = "4"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

fiveButton.addEventListener('click',function()
{
    typedInNum = "5"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

sixButton.addEventListener('click',function()
{
    typedInNum = "6"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

sevenButton.addEventListener('click',function()
{
    typedInNum = "7"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

eightButton.addEventListener('click',function()
{
    typedInNum = "8"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

nineButton.addEventListener('click',function()
{
    typedInNum = "9"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

zeroButton.addEventListener('click',function()
{
    typedInNum = "0"
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
});

//Decimal button Function
decimalButton.addEventListener('click',function()
{
    typedInNum = ".";
    currentNum = currentNum + typedInNum;
    capAmountOfNumbers ();
    digitClicked = true;
    operatorClickedMoreThanOnce = false;
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
    equalsButtonClicked = false;
    equalsButtonClickedMoreThanOnce = false;
    digitClicked = false;
    operatorClickedMoreThanOnce = false;
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

//Operator Functions///////////////////////////
let secondNum="";
let operatorInUse = "";
let operatorClickedMoreThanOnce;
function addOperator()
{
    totalOperatorClicked ++;
    equalsButtonClickedMoreThanOnce = false;
    equalsButtonClicked = false;
    digitClicked = false;
    operatorClickedMoreThanOnce = true;

    if (totalOperatorClicked <= 1)
    {
    secondNum = secondNum + currentNum;
    currentNum ="";
    
    }

    else if (totalOperatorClicked >= 2)
    {
        runOffCaculationMode = true;
    }
}

multButton.addEventListener('click',function()
{
    if (operatorClickedMoreThanOnce === false)
    {
        addOperator();
        
        operatorInUse = "x";
        capAmountOfNumbers ();
        
        if(totalOperatorClicked >= 2)
        {
        doRunOffCaculations();
        }
    }
    else{};
    

});

divideButton.addEventListener('click',function()
{

    if (operatorClickedMoreThanOnce === false)
    {
        addOperator();
        
        operatorInUse = "÷";
        capAmountOfNumbers ();
        
        if(totalOperatorClicked >= 2)
        {
        doRunOffCaculations();
        }
    }
    else{};
});

minusButton.addEventListener('click',function()
{
    if (operatorClickedMoreThanOnce === false)
    {
        addOperator();
        
        operatorInUse = "-";
        capAmountOfNumbers ();
        
        if(totalOperatorClicked >= 2)
        {
        doRunOffCaculations();
        }
    }
    else{};
});

addButton.addEventListener('click',function()
{
    if (operatorClickedMoreThanOnce === false)
    {
        addOperator();
        
        operatorInUse = "+";
        capAmountOfNumbers ();
        
        if(totalOperatorClicked >= 2)
        {
        doRunOffCaculations();
        }
    }
    else{};
});


//Caculation //Convert Strings to Int so we can caculate

//So We can add more operators without erroring out(ex 5+5= 10 then -1) NOTE THIS IS NOT 5+5 update -1. the user needs to hit the equals sign.

//Check to see if operator is hit after user clicks equals button.So we can trigger to add results of last equation (a run off equation)
multipleOperators = false;

//Keep track of equal button clicked so we can sequence things to fix errors(for instance spamming the uqauls button would trigger an error)
equalsButtonClicked = false;
//so if the user spams the equals button it does not error out
equalsButtonClickedMoreThanOnce = false;
let resultNum = "";
equalsButton.addEventListener('click',function()
{
    //reset total clicks becuase we are not doing run off caculuations. We are using ='s. CHECK LINE 296
    totalOperatorClicked = 0;
    equalsButtonClicked = true;
    operatorClickedMoreThanOnce = false;


    //TEST
    console.log(totalOperatorClicked) + " is total times operators have been clicked";
    console.log(currentNum + "  is current number selcted");
    console.log(secondNum + " is sec Number");
    console.log(resultNum +" is the result");
    console.log("runOFFCAC is " +runOffCaculationMode);
    console.log("digitCLicked is " + digitClicked);
    console.log("operator hit more than once" +operatorClickedMoreThanOnce);

    switch (operatorInUse) {
        case "x":

            if(multipleOperators === false && runOffCaculationMode === false && equalsButtonClicked=== true && equalsButtonClickedMoreThanOnce === false)
            {   
                resultNum = parseFloat(currentNum) * parseFloat(secondNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                console.log(resultNum)
                multipleOperators = true;
                equalsButtonClickedMoreThanOnce = true;
            }

            else if(multipleOperators === true && runOffCaculationMode === false &&equalsButtonClickedMoreThanOnce === false && digitClicked === true)
            {
                resultNum = parseFloat(currentNum) * parseFloat(resultNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                digitClicked = false;
                
            }
            
        break;

        case "÷":
            if (multipleOperators === false && runOffCaculationMode === false && equalsButtonClicked=== true && equalsButtonClickedMoreThanOnce === false)
            {
                if (currentNum === "0")
                {
                    resultNum = "error";
                    userOutput.textContent = resultNum;
                    currentNum = "";
                    secondNum = "";
                }
                else {resultNum = parseFloat(secondNum)/ parseFloat(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                multipleOperators = true;
                }
                equalsButtonClickedMoreThanOnce = true;
                
            }
            else if (multipleOperators === true && runOffCaculationMode === false &&equalsButtonClickedMoreThanOnce === false && digitClicked === true)
            {
                if(currentNum === "0")
                {
                    resultNum = "error";
                    userOutput.textContent = resultNum;
                    currentNum = "";
                    secondNum = "";
                    multipleOperators = false;
                    digitClicked = false;
                }
                else 
                {
                resultNum = parseFloat(resultNum)/ parseFloat(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
                console.log(resultNum);
                digitClicked = false;
                
                }
                
            }
        break;

        case "+":
            if (multipleOperators === false && runOffCaculationMode === false && equalsButtonClicked === true && equalsButtonClickedMoreThanOnce === false)
            {
            resultNum = parseFloat(currentNum) + parseFloat(secondNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            multipleOperators = true;
            equalsButtonClickedMoreThanOnce = true;
            }

            else if (multipleOperators === true && runOffCaculationMode === false && equalsButtonClickedMoreThanOnce === false && digitClicked === true) 
            {
            resultNum = parseFloat(currentNum) + parseFloat(resultNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            digitClicked = false;
            }
        break;

        case "-":
            if(multipleOperators === false && runOffCaculationMode === false && equalsButtonClicked === true && equalsButtonClickedMoreThanOnce === false)
            {    
            resultNum = parseFloat(secondNum) - parseFloat(currentNum);
            currentNum = "";
            secondNum = "";
            userOutput.textContent = resultNum.toString().substring(0,11);
            multipleOperators = true;
            equalsButtonClickedMoreThanOnce = true;
            }
            else if (multipleOperators === true && runOffCaculationMode === false && equalsButtonClickedMoreThanOnce === false && digitClicked === true)
            {
                resultNum = parseFloat(resultNum) - parseFloat(currentNum);
                currentNum = "";
                secondNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);   
                digitClicked = false;
            }
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
    //TEST
    console.log("this is for run off cacs")
    console.log(totalOperatorClicked + " is total times operators have been clicked");
    console.log(currentNum + "  is current number selcted");
    console.log(secondNum + " is sec Number");
    console.log(resultNum +" is the result");
    console.log("runOFFCAC is " +runOffCaculationMode);
    console.log("digitCLicked is " + digitClicked);
    console.log("")
    console.log("operator hit more than once" +operatorClickedMoreThanOnce);
    

    switch (operatorInUse)
    {
        

        case "x":
        if (totalOperatorClicked === 2 && secondNum !== "")
        {
            resultNum = parseFloat(currentNum) * parseFloat(secondNum); 
             userOutput.textContent = resultNum.toString().substring(0,11);
            currentNum = "";

        }
        else if (equalsButtonClicked === false && digitClicked === false && secondNum === "")
        {
            resultNum = parseFloat(currentNum) * parseFloat(resultNum);        
            userOutput.textContent = resultNum.toString().substring(0,11);  
            currentNum = "";
        }
        else if(totalOperatorClicked >= 3 && equalsButtonClicked === false)
        {
            resultNum = parseFloat(currentNum) * parseFloat(resultNum);        
            userOutput.textContent = resultNum.toString().substring(0,11);  
            currentNum = "";
        }
        

        break;
        case "÷":
            if (totalOperatorClicked === 2 && secondNum !== "" )
            {
                resultNum = parseFloat(secondNum) / parseFloat(currentNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
        
            else if (equalsButtonClicked === false && digitClicked === false && secondNum === "")
            {
                resultNum = parseFloat(resultNum) /  parseFloat(currentNum);        
                userOutput.textContent = resultNum.toString().substring(0,11);  
                currentNum = "";
            }
            else if(totalOperatorClicked >= 3 && equalsButtonClicked === false)
            {
                resultNum = parseFloat(resultNum) / parseFloat(currentNum);
                currentNum = "";
                        
                userOutput.textContent = resultNum.toString().substring(0,11);  
        
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);
            console.log("divsion failed");}
        break;
        
        case "+":
            if (totalOperatorClicked === 2 && secondNum !== "")
            {
                resultNum = parseFloat(currentNum) + parseFloat(secondNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
            else if (equalsButtonClicked === false && digitClicked === false && secondNum === "")
        {
            resultNum = parseFloat(currentNum) + parseFloat(resultNum);        
            userOutput.textContent = resultNum.toString().substring(0,11);  
            currentNum = "";
        }
            else if(totalOperatorClicked >= 3 &&equalsButtonClicked === false)
            {
                resultNum = parseFloat(currentNum) + parseFloat(resultNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);  
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);}
        break;

        case "-":
            if (totalOperatorClicked === 2 && secondNum !== "")
            {
                resultNum = parseFloat(secondNum) - parseFloat(currentNum);
                currentNum = "";
                userOutput.textContent = resultNum.toString().substring(0,11);
    
            }
            else if (equalsButtonClicked === false && digitClicked === false && secondNum === "")
        {
            resultNum = parseFloat(resultNum) -  parseFloat(currentNum);        
            userOutput.textContent = resultNum.toString().substring(0,11);  
            currentNum = "";
        }
            else if(totalOperatorClicked >= 3 && secondNum === "")
            {
                resultNum = parseFloat(resultNum) - parseFloat(currentNum);
                currentNum = ""; 
                userOutput.textContent = resultNum.toString().substring(0,11);  
            }
            else {userOutput.textContent = currentNum.toString().substring(0,11);}
        break;
    }
}





//TESTING
console.log("digitCLicked is " + digitClicked);