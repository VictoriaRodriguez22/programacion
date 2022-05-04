let dato1: number;
let dato2: number;

dato1 = prompt ("Ingrese el número");
dato2 = prompt ("ingrese hasta que número multiplicar");

let contador: number;
let total: number;

for (contador = 1; contador <= dato2; contador++){
  total = dato1 * contador;
  console.log(dato1 "x" contador ":" total);
}
