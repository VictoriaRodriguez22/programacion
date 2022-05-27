let cantidad: number = Number(prompt("Ingrese la dimension de los arreglos"));

let v1: number[] = new Array(cantidad);
let v2: number[] = new Array(cantidad);
let v3: number[] = new Array(cantidad);
let v4: number[] = new Array(cantidad);

let cargarvector = (v1: number[], cantidad: number) => {
  let indice: number;

  for (indice = 0; indice < cantidad; indice++) {
    v1[indice] = Number(prompt("Ingrese el valor vector1[", indice, "]"));
  }
};

cargarvector(v1, cantidad);
cargarvector(v2, cantidad);
cargarvector(v3, cantidad);
cargarvector(v4, cantidad);

let multiplicarArreglo = (
  vector1: number[],
  vector2: number[],
  vector3: number[],
  vector4: number[],
  cantidad: number
) => {
  let indice: number;
  let vResultado: number[] = new Array(cantidad);

  for (indice = 0; indice < cantidad; indice++) {
    vResultado[indice] =
      vector1[indice] * vector2[indice] * vector3[indice] * vector4[indice];
  }
  console.log("La multiplicacion de los arreglos es", vResultado);
};

multiplicarArreglo(v1, v2, v3, v4, cantidad);
