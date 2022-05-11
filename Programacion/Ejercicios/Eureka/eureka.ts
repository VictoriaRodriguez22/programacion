let claveingresada: string;
let contador: number = 1;

while (contador <=3 && claveingresada != "eureka"){
  claveingresada = prompt("introduzca la clave:");
  contador ++;
}

if (claveingresada == "eureka"){
  console.log("Ingresaste correctamente")
} else {
  console.log("Ya no tiene más intentos")
}