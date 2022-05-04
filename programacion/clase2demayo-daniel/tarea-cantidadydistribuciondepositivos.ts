let dato : number;

dato = Number (prompt ("Ingresa una temperatura"));

let cantidad: number;
let promedio: number;
cantidad = 0;
let suma: number;
suma = 0;

while (dato !=0 ){

  suma = suma +1 ;
  
  if ( 0< dato) {
    cantidad = cantidad + 1;
  }
 dato = Number (prompt ("Ingrese otra Temperatura:"));
}

promedio = cantidad *100 / suma

console.log ("La cantidad de temperaturas positivas es:" cantidad);
console.log("El porcentaje de positivos es:" promedio "%");



