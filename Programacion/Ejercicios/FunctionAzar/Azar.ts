let dimension: number = Number(prompt("Ingrese la dimension del Arreglo"));
let arreglo: number[] = new Array(dimension);

function generarNumeroAleatorio(numeroMin: number, numeroMax: number): number {
  let numeroAleatorio: number;
  numeroAleatorio =
    Math.floor(Math.random() * (numeroMax - numeroMin)) + numeroMin;
  return numeroAleatorio;
}

function cargarArregloAlAzar(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = generarNumeroAleatorio(0, 25);
  }
  console.log(arreglo);
  return arreglo;
}

cargarArregloAlAzar(arreglo, dimension);
