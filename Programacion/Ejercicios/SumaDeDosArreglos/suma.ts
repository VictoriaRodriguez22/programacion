let v1: number [] = new Array (6);
let v2: number [] = new Array (6);

let vSuma: number [] = new Array(6);

let indice: number;

for (indice = 0; indice < 6; indice ++){
 v1[indice] = Number(prompt("ingrese el valor de v1[", indice, "]"));
 }

 for (indice = 0; indice < 6; indice ++){
  v2[indice] = Number(prompt("ingrese el valor de v2[", indice, "]"));
  }

  for (indice = 0; indice < 6; indice ++){
    vSuma = v1[indice] + v2[indice];
    console.log ("La suma de " + v1[indice] "y " + v2[indice] + "es de " + vSuma)
  }

  