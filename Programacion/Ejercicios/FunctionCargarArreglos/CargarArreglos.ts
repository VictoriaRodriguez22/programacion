let dimension: number = Number(prompt("Ingrese la dimension del arreglo: "));

let arreglo: number[] = new Array(dimension);

function cargarArreglos(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(prompt("Ingrese numero en el indice " + indice));
  }
  console.log(arreglo);
  return arreglo;
}

cargarArreglos(arreglo, dimension);
