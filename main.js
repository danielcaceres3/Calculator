function add(a, b){
    return a + b; // return tha sum of the wo inputs
};

function subtract(a, b){
    return a - b; // subtract second number from the first number 
};

function multiply(a, b){
    return a * b; //Multiply both numbers by eachother 
};

function divide(a, b){
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

console.log(operate("+",6,6));
console.log(operate("-",6,6));
console.log(operate("x",6,6));
console.log(operate("/",6,6));
