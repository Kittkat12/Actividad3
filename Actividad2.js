//noprotect


/*


  Cual es el signo zodiacal
  
  1. ¿Cual es el mes?
  2. ¿Cual es el dia?
  3. Cada mes tiene 2 meses.
  
  
*/

var dia = prompt("Ingrese el numero del dia de su nacimiento");
var mes = prompt("Ingrese el numero de su mes de nacimiento");

// Convierte los valores ingresados en números
dia = parseInt(dia);
mes = parseInt(mes);

// Ya sabemos el mes
if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    alert("Acuario");
} else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    alert("Piscis");
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    alert("Aries");
} else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    alert("Tauro");
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    alert("Géminis");
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    alert("Cáncer");
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    alert("Leo");
} else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    alert("Virgo");
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    alert("Libra");
} else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    alert("Escorpio");
} else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    alert("Sagitario");
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    alert("Capricornio");
} else {
    alert("Fecha no válida");
}
