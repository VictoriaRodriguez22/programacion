let dimension: number = Number(
  prompt("Ingrese la cantidad de números del arreglo")
);

let v1: number[] = new Array(dimension);

let indice: number;

for (indice = 0; indice < dimension; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor v1[", indice, "]"));
}

for (indice = dimension - 1; indice >= 0; indice--) {
  console.log(v1[indice]);
}
