const outP = document.querySelector(".outP");

let totalNum = 0;
let numStr = "0";
let op;

function clickedButton(val) {
  if (isNaN(val)) {
    opFunc(val);
  } else {
    numFunc(val);
  }
  outP.innerText = numStr;
}

function opFunc(sym) {
  switch (sym) {
    case "C":
      totalNum = 0;
      numStr = "0";
      break;
    case "=":
      if (op === null) {
        return;
      }
      flushOperation(parseInt(numStr));
      op = null;
      numStr = totalNum;
      totalNum = 0;
      break;
    case "+":
    case "-":
    case "x":
    case "/":
      mathFunc(sym);
      break;
  }
}

function mathFunc(sym) {
  if (numStr === "0") {
    return;
  }
  const numVar = parseInt(numStr);
  if (totalNum === 0) {
    totalNum = numVar;
  } else {
    flushOperation(numVar);
  }
  op = sym;
  numStr = "0";
}

function flushOperation(numVar) {
  if (op === "+") {
    totalNum += numVar;
  } else if (op === "-") {
    totalNum -= numVar;
  } else if (op === "x") {
    totalNum *= numVar;
  } else if (op === "/") {
    totalNum /= numVar;
  }
}

function numFunc(num) {
  if (numStr === "0") {
    numStr = num;
  } else {
    numStr += num;
  }
}

function init() {
  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      clickedButton(event.target.innerText);
    });
}

init();
