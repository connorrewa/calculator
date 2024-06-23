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

let num1, globalOp, num2, displayValue = '', waitForSecondNum = false;

function operate(num1, op, num2) {
    let result;
    let temp;
    switch (op) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
    }
    return (Number.isInteger(result) ? result : result.toFixed(3) * 1);
}


const content = document.querySelector(".content");
content.addEventListener("click", (event) => {
    let btn = event.target.textContent;
    const numList = '0123456789.';
    const opList = 'x/+-='
    if (numList.includes(btn)) {
        handleNumber(btn);
    }

    else if (opList.includes(btn))
        handleOp(btn);

    else if (btn == 'clear') {

        displayValue = '';
        num1 = 0;
        num2 = 0;
        globalOp = '';
    }

    else if (btn == 'delete') {
        // remove last character if exists
        if (displayValue) {
            displayValue = String(displayValue)
                .substring(0, displayValue.length - 1);
        }
    }
    const display = document.querySelector(".display");
    display.textContent = displayValue;
});

function handleNumber(num) {
    display = document.querySelector(".display");
    // We need to replace display content when the first number is selected
    // after clicking an op button
    if (waitForSecondNum) {
        displayValue = num;
        waitForSecondNum = false;
    } else {
        displayValue += num;
    }
}

function handleOp(op) {
    if (op === '=') {
        num2 = Number(displayValue);
        displayValue = operate(num1, globalOp, num2)
        num1 = displayValue;
        globalOp = '';
        waitForSecondNum = false;
    } else {
        // There is already an operation queued.
        // Compute this before adding next operation
        if (globalOp) {
            console.log('changing..')
            console.log(num1, globalOp, Number(displayValue));
            displayValue = operate(num1, globalOp, Number(displayValue))
            console.log(displayValue);
        }
        globalOp = op;
        num1 = Number(displayValue);
        waitForSecondNum = true;

    }


}

