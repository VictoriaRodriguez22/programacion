//let nombredelAlumno: string (prompt("Ingrese el nombre del alumno:"));
//let notapractica: number (prompt("Ingrese la nota práctica:"));
///let notaproblemas: number (prompt("Ingrese la nota de los problemas:"));
//let notateorica: number (prompt("Ingrese la nota de la teoria:"));

let notafinal: number;
notafinal = 0;
let nota: number;
nota = 0;
notapractica = 0;
notaproblemas = 0;
notateorica = 0;

if (nombredelAlumno != ""){

while ( 0<notapractica<10 ){
  notapractica = notapractica*0.1;
}
while (0<notaproblemas>10){
  notaproblemas = notaproblemas*0.5;
} 
 while (0<notateorica<10) {
notateorica = notateorica*0.4;
}
}
nota= notapractica + notaproblemas + notateorica;
notafinal= nota / 3;
console.log("La nota final de" nombredelAlumno "es de:" notafinal)

