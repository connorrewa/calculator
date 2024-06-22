function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

let num1, op, num2, displayValue;

function operate(num1, op, num2) {
    let result;
    switch(op) {
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
    if (btn == 'clear') {
        const display = document.querySelector(".display");
        display.textContent = '';
    } else {
        const numlist = '0123456789';
        if (numlist.includes(btn)) {
            updateDisplay(parseInt(btn));
        }
    }
    // switch (num) {
    //     case 0:
    //         updateDisplay(num);
    //         break;
    // }
});

function updateDisplay(num) {
    div = document.querySelector(".display");
    div.textContent = num;
    console.log('updating...');
}
