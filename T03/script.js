let ram = "0";
let display = "0"
let trigger = 0;
let trigger2 = 0;

// Initial ram
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
    console.log(ram);
}

function addDot() {
    if (!ram.includes(".")) {
        ram += ".";
        display += ".";
    }
    document.getElementById('displayValue').innerText = display;
}

function clear() {
    ram = "0";
    display = "0";
    trigger = 0;
    trigger2 = 0;
    operator_status(4);
    document.getElementById('displayValue').innerText = display;
}

function operatorOnClick(operator) {
    operator_status(4);
    if (ram === "0") return;
    if (ram.slice(-3) === " + " || ram.slice(-3) === " - " || ram.slice(-3) === " x " || ram.slice(-3) === " / ")
        ram = ram.slice(0, -3);
    console.log('keep running');
    if (ram.includes("+") || ram.includes("-") || ram.includes("x") || ram.includes("/"))
        calculate();
    switch (operator) {
        case "+":
            operator_status(0);
            ram += " + ";
            break;
        case "-":
            operator_status(1);
            ram += " - ";
            break;
        case "x":
            operator_status(2);
            ram += " x ";
            break;
        case "/":
            operator_status(3);
            ram += " / ";
            break;
    }
    trigger = 2;
    document.getElementById('displayValue').innerText = display;
}

function numberOnClick(digit) {
    if (trigger === 1) {
        ram = "0";
        display = "0";
        trigger = 0;
    }
    if ((ram.includes("+") || ram.includes("-") || ram.includes("x") || ram.includes("/")) && trigger2 === 0) {
        console.log(trigger2);
        trigger2 = 1;
        display = "0";
    }
    if (digit === ".") return addDot();
    if (digit === "0" && ram === "0") return;
    if (ram === "0") ram = "";
    if (display === "0") display = "";
    ram += digit;
    display += digit;
    document.getElementById('displayValue').innerText = display;
}

function calculate() {
    if (!ram.includes("+") && !ram.includes("-") && !ram.includes("x") && !ram.includes("/")) return console.log("No operator");
    try {
        let result = eval(ram.replace(/x/g, '*'));
        ram = result.toString();
        display = ram
        trigger = 1;
        trigger2 = 0;
        operator_status(4);
    } catch (e) {
        ram = "Error";
    }
    document.getElementById('displayValue').innerText = display;
}

function operator_status(idx) {
    let a = document.getElementById("operators")
    let b = a.getElementsByClassName("operator");
    for (let i = 0; i < b.length; i++) {
        b[i].classList.remove("active");
    }
    if (idx === 4) return;
    b[idx].classList.add("active");
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