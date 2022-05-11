let dato : number = Number (prompt ("Ingresa una temperatura"));

let max: number;
let min: number;
let contador: number;
let promedio: number;
let suma: number;

suma = 0;
contador = 0;
promedio = 0;


max = dato; 
min = dato;

while (dato !=0 ){

contador = contador + 1;
suma = suma + dato;

  if ( dato > max){
max = dato;
} 
if ( dato < min){
min = dato;
  }
 dato = Number (prompt ("Ingresa una temperatura"));

}
console.log ("La temperatura maxima es:" max);
console.log ("La temperatura mínima es:" min);

promedio = suma / contador;

console.log ("La temperatura promedio es:" promedio);

