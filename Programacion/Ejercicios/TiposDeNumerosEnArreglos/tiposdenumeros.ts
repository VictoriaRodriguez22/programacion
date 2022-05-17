let rotulo1 = document.getElementById("rotulo1");
let dato1 = document.getElementById("dato1");
let btnEnviar = document.getElementById("btnEnviar");

rotulo1?.innerHTML = "Cantidad de Números del arreglo";

btnEnviar?.addEventListener("click", () => {
  let dimension: number = Number(dato1.value);

  let v1: number[] = new Array(dimension);

  let indice: number;

  let positivos: number = 0;

  let negativos: number = 0;

  let ceros: number = 0;
  for (indice = 0; indice < dimension; indice++) {
    v1[indice] = Number(prompt("Ingrese el numero de v1[", indice, "]"));
  }

  for (indice = 0; indice < dimension; indice++) {
    if (v1[indice] > 0) {
      positivos++;
    } else if (v1[indice] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }
  console.log("La cantidad de positivos es ", positivos);
  console.log("La cantidad de negativos es ", negativos);
  console.log("La cantidad de ceros es", ceros);
});
