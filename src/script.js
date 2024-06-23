function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1, globalOp, num2, displayValue;

function operate(num1, op, num2) {
    let result;
    switch (op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
    }
    return result;
}


const content = document.querySelector(".content");
content.addEventListener("click", (event) => {
    console.log(event.target);
    let btn = event.target.textContent;
    console.log(btn);
    const numList = '0123456789.';
    const opList = 'X/+-='
    if (numList.includes(btn)) 
        handleNumber(btn);

    else if (opList.includes(btn)) 
        handleOp(btn);
    
    else if (btn == 'clear') {
        const display = document.querySelector(".display");
        display.textContent = '0';
    } 
    
    else if (btn == 'delete') {
        const display = document.querySelector(".display");
        display.textContent = '';
        num1 = 0;
        num2 = 0;
        globalOp = '';
    }
    
});

function handleNumber(num) {
    display = document.querySelector(".display");
    display.textContent += num;
    console.log('updating...');
}

function handleOp(op) {
    if (op === '=') {
        num2 = Number(displayValue);
        let result = operate(num1, globalOp, num2)
        displayValue = result;
        num1 = result;
        globalOp = '';
    } else {
        globalOp = op;
        num1 = Number(displayValue);
    }
    

}
