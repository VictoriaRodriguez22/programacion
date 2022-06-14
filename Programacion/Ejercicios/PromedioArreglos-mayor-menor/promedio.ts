let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

//esta funcion muestra como sacar promedio
function promedio(nota1: number[]): number {
  let indice: number;
  let suma: number = 0;
  let promedio: number;
  for (indice = 0; indice < nota1.length; indice++) {
    suma += nota1[indice];
  }
  promedio = suma / nota1.length;
  return promedio;
}

// esta funcion muestra como sacar el mayor promedio de las tres
function mayorPromedio(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[]
) {
  let promedioArreglo1 = promedio(arreglo1);
  let promedioArreglo2 = promedio(arreglo2);
  let promedioArreglo3 = promedio(arreglo3);

  if (
    promedioArreglo1 > promedioArreglo2 &&
    promedioArreglo1 > promedioArreglo3
  ) {
    console.log("La comision con Mayor promedio es " + promedioArreglo1);
  } else {
    if (
      promedioArreglo2 > promedioArreglo1 &&
      promedioArreglo2 > promedioArreglo3
    ) {
      console.log("La comision con Mayor promedio es " + promedioArreglo2);
    } else {
      console.log("La comision con Mayor promedio es " + promedioArreglo3);
    }
  }
}

// esta funcion ,uestra como sacar el menor promedio de las tres
function menorPromedio(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[]
) {
  let promedioArreglo1 = promedio(arreglo1);
  let promedioArreglo2 = promedio(arreglo2);
  let promedioArreglo3 = promedio(arreglo3);

  if (
    promedioArreglo1 < promedioArreglo2 &&
    promedioArreglo1 < promedioArreglo3
  ) {
    console.log("La comision con Menor promedio es " + promedioArreglo1);
  } else {
    if (
      promedioArreglo2 < promedioArreglo1 &&
      promedioArreglo2 < promedioArreglo3
    ) {
      console.log("La comision con Menor promedio es " + promedioArreglo2);
    } else {
      console.log("La comision con Menor promedio es " + promedioArreglo3);
    }
  }
}

console.log("El promedio de la comision A es " + promedio(comisionA));
console.log("El promedio de la comision B es " + promedio(comisionB));
console.log("El promedio de la comision C es " + promedio(comisionC));
console.log(mayorPromedio(comisionA, comisionB, comisionC));
console.log(menorPromedio(comisionA, comisionB, comisionC));

//funcion para saber notas desaprobadas
function cantidadDesaprobados(arreglo: number[]): number {
  let desaprobados: number = 0;
  let indice: number;
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] < 6) {
      desaprobados++;
    }
  }
  return desaprobados;
}

console.log(
  "La cantidad de notas desaprobadas en la Comision A son " +
    cantidadDesaprobados(comisionA)
);
console.log(
  "La cantidad de notas desaprobadas en la Comision B son " +
    cantidadDesaprobados(comisionB)
);
console.log(
  "La cantidad de notas desaprobadas en la Comision C son " +
    cantidadDesaprobados(comisionC)
);

// esta funcion me busca la menor nota
function buscarMenorNota(arreglo: number[]): number {
  let menor: number = 11;
  let indice: number;
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] < menor) {
      menor = arreglo[indice];
    }
  }
  return menor;
}

console.log("La menor nota en la Comision A son " + buscarMenorNota(comisionA));
console.log("La menor nota en la Comision B son " + buscarMenorNota(comisionB));
console.log("La menor nota en la Comision C son " + buscarMenorNota(comisionC));
