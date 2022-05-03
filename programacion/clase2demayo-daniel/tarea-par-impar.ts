let numero: number;

for (let contador: number = 1; contador <=100; contador++){

if (numero % 2 == 0 && numero != 0) {
    console.log("El número ingresado es Par");
  } else if (numero % 2 != 0) {
    console.log("El número ingresado es Impar");
  } else if (numero == 0) {
    console.log("El número ingresado es 0");
  }
});
