const calcDisplay = document.querySelector(".calculation");
const miniScreen = document.querySelector(".mini-screen");
const acBtn = document.querySelector(".ac");
const delBtn = document.querySelector(".del");
const decimalBtn = document.querySelector(".decimal");
const evalBtn = document.querySelector(".evaluate");
const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
//const  = document.querySelector("");
let firstNum = "";
let operand = [];
let arithOper = "";
let operation = "";

decimalBtn.addEventListener("click", () => {
  operand.push(".");
  calcDisplay.innerText += ".";
});
addBtn.addEventListener("click", () => {
  firstNum = Number(operand.join(""));
  operation = "+";
  miniScreen.innerText = `${firstNum} + `;
  operand = [];
  calcDisplay.innerText += " + ";
});
minusBtn.addEventListener("click", () => {
  firstNum = Number(operand.join(""));
  operation = "-";
  miniScreen.innerText = `${firstNum} - `;
  operand = [];
  calcDisplay.innerText += " - ";
});
multiplyBtn.addEventListener("click", () => {
  firstNum = Number(operand.join(""));
  operation = "×";
  miniScreen.innerText = `${firstNum} × `;
  operand = [];
  calcDisplay.innerText += " × ";
});
divideBtn.addEventListener("click", () => {
  firstNum = Number(operand.join(""));
  operation = "÷";
  miniScreen.innerText = `${firstNum} ÷ `;
  operand = [];
  calcDisplay.innerText += " ÷ ";
});

zeroBtn.addEventListener("click", () => {
  operand.push(0);
  calcDisplay.innerText += "0";
});
oneBtn.addEventListener("click", () => {
  operand.push(1);
  calcDisplay.innerText += "1";
});
twoBtn.addEventListener("click", () => {
  operand.push(2);
  calcDisplay.innerText += "2";
});
threeBtn.addEventListener("click", () => {
  operand.push(3);
  calcDisplay.innerText += "3";
});
fourBtn.addEventListener("click", () => {
  operand.push(4);
  calcDisplay.innerText += "4";
});
fiveBtn.addEventListener("click", () => {
  operand.push(5);
  calcDisplay.innerText += "5";
});
sixBtn.addEventListener("click", () => {
  operand.push(6);
  calcDisplay.innerText += "6";
});
sevenBtn.addEventListener("click", () => {
  operand.push(7);
  calcDisplay.innerText += "7";
});
eightBtn.addEventListener("click", () => {
  operand.push(8);
  calcDisplay.innerText += "8";
});
nineBtn.addEventListener("click", () => {
  operand.push(9);
  calcDisplay.innerText += "9";
});
delBtn.addEventListener("click", () => {
  operand.pop();
  calcDisplay.innerText = operand.join("");
});


evalBtn.addEventListener("click", (operand1, operand2, operator) => {
  operand1 = firstNum;
  operand2 = Number(operand.join(""));
  operand = [];
  miniScreen.innerText += operand2,
  operator = operation;
  let result;
  
  switch(operator) {
    case "+":
    result = operand1 + operand2;
    break;
    
    case "-":
    result = operand1 - operand2;
    break;
    
    case "×":
    result = operand1 * operand2;
    break;
    
    case "÷":
    result = operand1 / operand2;
     }
 calcDisplay.textContent = result;
 operand.push(result);
});
acBtn.addEventListener("click", () => {
  calcDisplay.innerText = "";
  miniScreen.innerText = "";
  operand = [];
})