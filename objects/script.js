function Validate(form) {
  primero = form.salida.selectedIndex;
  segundo = form.llegada.selectedIndex;
  if (
    form.salida.options[primero].value == "" ||
    form.llegada.options[segundo].value == ""
  ) {
    alert("no haz elegido ninguna ciudad");
  } else {
    Verseleccion(form);
  }
}

function Verseleccion(form) {
  var ventan;
  ventan = window.open("", "", "width=350, height=200");
  ventan.document.write("<b> haz elegido el siguiente viaje</b><br>");
  ventan.document.write("<b> Salida: </b>");
  primero = form.salida.selectedIndex;

  ventan.document.write(form.salida.options[primero].value + "<br>");
  ventan.document.write("<b>llegada :</b> ");
  segundo = form.llegada.selectedIndex;
  ventan.document.write(form.llegada.options[segundo].value + "<br>");
  ventan.document.write("<b>medio :</b>");
  for (i = 0; i < form.medio.length; i++) {
    if (form.medio[i].checked) {
      ventan.document.write(form.medio[i].value + "<br>");
    }
  }
  ventan.document.close();
}
