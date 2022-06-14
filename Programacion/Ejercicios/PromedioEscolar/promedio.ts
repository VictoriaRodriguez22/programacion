let cantidadAlumnos: number = Number(prompt("Ingrese la cantidad de Alumnos"));
let alumnos: string[] = new Array(cantidadAlumnos);
let nota1: number[] = new Array(cantidadAlumnos);
let nota2: number[] = new Array(cantidadAlumnos);
let nota3: number[] = new Array(cantidadAlumnos);

function cargarAlumno(arreglo: string[], cantidad: number): string[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = prompt("Ingrese el nombre del alumno " + indice);
  }
  console.log(arreglo);
  return arreglo;
}

function cargarPrimerasNotas(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(
      prompt(
        "Ingrese la primer nota del alumno " +
          cargarAlumno(alumnos, cantidadAlumnos)
      )
    );
  }
  console.log(arreglo);
  return arreglo;
}

function cargarSegundasNotas(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(
      prompt(
        "Ingrese la Segunda nota del alumno " +
          cargarAlumno(alumnos, cantidadAlumnos)
      )
    );
  }
  console.log(arreglo);
  return arreglo;
}

function cargarTercerasNotas(arreglo: number[], cantidad: number): number[] {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(
      prompt(
        "Ingrese la Tercer nota del alumno " +
          cargarAlumno(alumnos, cantidadAlumnos)
      )
    );
  }
  console.log(arreglo);
  return arreglo;
}

function sacarPromedio(
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
) {
  let indice: number;
  let promedio: number = 0;
  for (indice = 0; indice < cantidad; indice++) {
    promedio = (arreglo1[indice] + arreglo2[indice] + arreglo3[indice]) / 3;
    console.log(
      "El promedio de " +
        cargarAlumno(alumnos, cantidadAlumnos) +
        "es de  " +
        promedio
    );
  }
}

console.log(cargarPrimerasNotas(nota1, cantidadAlumnos));
console.log(cargarSegundasNotas(nota2, cantidadAlumnos));
console.log(cargarTercerasNotas(nota3, cantidadAlumnos));

console.log(
  sacarPromedio(
    cargarPrimerasNotas(nota1, cantidadAlumnos),
    cargarSegundasNotas(nota2, cantidadAlumnos),
    cargarTercerasNotas(nota3, cantidadAlumnos),
    cantidadAlumnos
  )
);
