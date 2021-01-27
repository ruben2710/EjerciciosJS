'use strict';

// Petición de número de dni


 const dni = prompt("por favor, introduce tu número del dni");
 console.log("dni", dni)

// Mensajes de validez

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999) {
  alert("el número proporcionado no es válido");
} else {
  const letterSelected = letras[dni%23];
  alert('Tu letra del DNI es '+ letterSelected);
}
