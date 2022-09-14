function add(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b; // return tha sum of the wo inputs
};

function subtract(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a - b; // subtract second number from the first number 
};

function multiply(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a * b; //Multiply both numbers by eachother 
};

function divide(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a/b; // Divide the second number by the first number
};

function operate(op, a, b){
    //seitch statment that will perfrom operation depnding on whatb the operand was
    switch (op){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equals");
let answer = document.getElementById('answer');
 

let firstNum = "";
let secondNum = "";
let operation = "";
let result = "";

//gets the numbers and add it
numbers.forEach(function(number){
    number.addEventListener("click", number => {
        if (operation === ""){
            firstNum += number.target.innerText;
            answer.textContent = firstNum;
            console.log(firstNum);
        }
        else{
            secondNum += number.target.innerText;
            answer.textContent = secondNum
            console.log(secondNum);
        }
    });
});

//check the operation that is needed
operators.forEach(function(operand){
    operand.addEventListener("click", () => { 
        operation = operand.innerText;
        console.log(operation);
    })
})

//check to see if equals is pressed
equals.addEventListener("click", () =>{
    result = operate(operation, firstNum, secondNum);
    answer.textContent = result;
    if(result == null){
        answer.textContent = "Undefined"
    }
    firstNum = result;
    secondNum = "";
    console.log(result);
}

)

//backspace button This will elimante the last number in the string
const del = document.querySelector(".del");
del.addEventListener("click", () =>{
    answer.textContent = answer.textContent.slice(0, -1);
    if(operation === ""){
        firstNum = firstNum.slice(0,-1);
    }
    else{
        secondNum = secondNum.slice(0,-1);
    }

})

//this is the clear value working!
const clear = document.querySelector(".clear")
clear.addEventListener("click", () =>{
    firstNum = "";
    secondNum = "";
    operation = "";
    answer.textContent = "";
})

