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

const btns = document.querySelectorAll("button");
let answer = document.getElementsByClassName('answer');
console.log(btns);


btns.forEach(function(btn){
    btn.addEventListener("click", () => {
        answer.textContent = btn.textContent
        console.log(answer.textContent)
    });
});