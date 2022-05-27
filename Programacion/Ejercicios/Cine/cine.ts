let cantidadButacas: number = Number(
  prompt("Ingrese la cantidad de Butacas del Cine")
);
let butacas: boolean[] = new Array(cantidadButacas);

let indice: number;
let cantidadDesocupadas: number = 0;

for (indice = 0; indice < cantidadButacas; indice++) {
  butacas[indice] = Boolean(
    prompt("¿La butaca" + (indice + 1) + "está ocupada? (vacio=no)")
  );

  if (butacas[indice] === false) {
    cantidadDesocupadas++;
  }
}

console.log("La cantidad de butacas desocupadas es", cantidadDesocupadas);
