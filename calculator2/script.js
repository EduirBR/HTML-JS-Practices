var nA = document.getElementById("numbera");
var nB = document.getElementById("numberb");
var operator = document.getElementById("operator");
var result = document.getElementById("result");

function calculator() {
  let numA = parseFloat(nA.value);
  let numB = parseFloat(nB.value);
  let op = operator.value;

  switch (op) {
    case "+":
      result.value = numA + numB;

      break;
    case "-":
      result.value = numA - numB;

      break;
    case "x":
      result.value = numA * numB;

      break;
    case "/":
      if (numB != 0) {
        result.value = numA / numB;
      } else {
        result.value = "error";
      }

      break;
  }
}
