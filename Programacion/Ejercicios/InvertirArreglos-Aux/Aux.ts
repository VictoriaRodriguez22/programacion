let dimension: number = Number(prompt("Ingrese la dimension del Arreglo"));
let arregloAInvertir: number[] = new Array(dimension);

function cargarArreglo(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(
      prompt("Ingrese el numero en la posicion " + indice)
    );
  }
  console.log(arreglo);
  return arreglo;
}

function invertirArreglo(arreglo: number[], cantidad: number): number[] {
  let indiceIzq: number = 0;
  let indiceDer: number = cantidad - 1;
  let auxiliar: number;
  while (indiceIzq < indiceDer) {
    auxiliar = arreglo[indiceIzq];
    arreglo[indiceIzq] = arreglo[indiceDer];
    arreglo[indiceDer] = auxiliar;
  }
  console.log(arreglo);
  return arreglo;
}

cargarArreglo(arregloAInvertir, dimension);
invertirArreglo(arregloAInvertir, dimension);
