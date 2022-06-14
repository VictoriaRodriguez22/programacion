let dimension: number = Number(prompt("Ingrese la dimension del Arreglo"));
let arregloNombres: string[] = new Array(dimension);

function cargarNombres(arreglo: string[], cantidad: number): string[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = prompt("Ingrese el nombre en la posicion " + indice);
  }
  console.log(arreglo);
  return arreglo;
}

cargarNombres(arregloNombres, dimension);
