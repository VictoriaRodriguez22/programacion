let arreglo1: number[] = [23, 56, 6, 78, 9, 10, 15, 200];

// en esta funcion sacamos el maximo del arreglo
function sacarNumeroMaximo(arreglo: number[]): number {
  let indice: number;
  let maximo: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] > maximo) {
      maximo = arreglo[indice];
    }
  }
  console.log("El numero mayor del arreglo es " + maximo);
  return maximo;
}

function sacarPromedio(arreglo: number[]): number {
  let indice: number;
  let promedio: number;
  let suma: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    suma += arreglo[indice];
  }
  promedio = suma / arreglo.length;
  console.log("El promedio del arreglo es " + promedio);
  return promedio;
}

console.log(sacarNumeroMaximo(arreglo1));
console.log(sacarPromedio(arreglo1));
