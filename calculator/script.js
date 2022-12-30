var operacion,
  numero1,
  numero2,
  aux = 0;
do {
  numero1 = prompt("por favor el primero numero", "");
  if (isNaN(numero1)) {
    alert("Error al introducir el numero");
  }
} while (isNaN(numero1));

do {
  numero2 = prompt("por favor el segundo numero", "");
  if (isNaN(numero2)) {
    alert("Error al introducir el numero");
  }
} while (isNaN(numero2));

calcular(parseFloat(numero1), parseFloat(numero2));

function calcular(numero1, numero2) {
  let n1 = document.getElementById("number1");
  let n2 = document.getElementById("number2");

  n1.value = numero1;
  n2.value = numero2;
  var aux = 0;
  while (aux != 1) {
    operacion = prompt(
      `introduzca el simbolo segun la accion que desea realizar\n
         '+' para sumar\n
         '-' para restar\n
         '*' para multiplicar\n
         '/' para dividir\n
         '%' el residuo de esos numeros`,
      ""
    );

    switch (operacion) {
      case "+":
        document.write("<h2>", numero1 + numero2, "</h2>");
        aux = 1;
        break;
      case "-":
        document.write("<h2>", numero1 - numero2, "</h2>");
        aux = 1;
        break;
      case "*":
        document.write("<h2>", numero1 * numero2, "</h2>");
        aux = 1;
        break;
      case "/":
        document.write("<h2>", numero1 / numero2, "</h2>");
        aux = 1;
        break;
      case "%":
        document.write("<h2>", numero1 % numero2, "</h2>");
        aux = 1;
        break;
      default:
        "Operacion no valida";
    }
  }
}
