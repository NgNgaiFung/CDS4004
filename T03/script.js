let display = "0";
let trigger = 0;

// Initial display
document.getElementById('displayValue').innerText = display;

function situation_seperator(n) {
    console.log(n);
    switch (n) {
        case ".": numberOnClick(n); break;
        case "c": clear(); break;
        case "+": operatorOnClick("+"); break;
        case "-": operatorOnClick("-"); break;
        case "x": operatorOnClick("x"); break;
        case "/": operatorOnClick("/"); break;
        case "=": calculate(); break;
        default: numberOnClick(n); break;
    }
}

function addDot() {
    if (!display.includes(".")) {
        display += ".";
    }
    document.getElementById('displayValue').innerText = display;
}

function clear() {
    display = "0";
    ram = 0;
    document.getElementById('displayValue').innerText = display;
}

function operatorOnClick(operator) {
    let a = document.getElementById("operators")
    let b = a.getElementsByClassName("operator");
    for (let i = 0; i < b.length; i++) {
        b[i].classList.remove("active");
    }
    if (display === "0") return;
    switch (operator) {
        case "+":
            console.log(operators[0]);
            b[0].classList.add("active");
            display += " + ";
            break;
        case "-":
            b[1].classList.add("active");
            display += " - ";
            break;
        case "x":
            b[2].classList.add("active");
            display += " x ";
            break;
        case "/":
            b[3].classList.add("active");
            display += " / ";
            break;
    }
    trigger = 0;
    document.getElementById('displayValue').innerText = display;
}

function numberOnClick(digit) {
    if (digit === ".") return addDot();
    if (trigger === 1) {display = ""; trigger = 0;}
    if (digit === "0" && display === "0") return;
    if (display === "0") display = "";
    display += digit;
    document.getElementById('displayValue').innerText = display;
}

function calculate() {
    try {
        let result = eval(display.replace(/x/g, '*'));
        display = result.toString();
    } catch (e) {
        display = "Error";
    }
    trigger = 1;
    document.getElementById('displayValue').innerText = display;
}






// numbers
let pad = document.getElementById("pad");
let buttons = pad.getElementsByClassName("number");
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        situation_seperator(this.innerText);
    });
}

// operators
let operators = document.getElementById("operators")
let operator = operators.getElementsByClassName("operator");
console.log(operator);
// console.log(operator);
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        situation_seperator(this.innerText);
    });
}

// equal
let equal = document.getElementById("equals");
equal.addEventListener("click", function() {
    situation_seperator(this.innerText);
});