let cantidad: number = Number(prompt("Ingrese la dimension de los arreglos"));

let v1: number[] = new Array(cantidad);
let v2: number[] = new Array(cantidad);

let cargarvector1 = (v1: number[], cantidad: number) => {
  let indice: number;

  for (indice = 0; indice < cantidad; indice++) {
    v1[indice] = Number(prompt("Ingrese el valor vector1[", indice, "]"));
  }
};

let cargarvector2 = (v2: number[], cantidad: number) => {
  let indice: number;

  for (indice = 0; indice < cantidad; indice++) {
    v2[indice] = Number(prompt("Ingrese el valor vector2[", indice, "]"));
  }
};

cargarvector1(v1, cantidad);
cargarvector2(v2, cantidad);

let multiplicarvector = (
  vector1: number[],
  vector2: number[],
  cantidad: number
): number => {
  let indice: number;
  let producto: number = 0;

  for (indice = 0; indice < cantidad; indice++) {
    producto = v1[indice] * v2[indice] + producto;
  }
  return producto;
};

multiplicarvector(v1, v2, cantidad);

console.log("El producto escalar es", multiplicarvector(v1, v2, cantidad));
