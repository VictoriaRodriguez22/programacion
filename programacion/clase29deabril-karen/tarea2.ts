let dato1 = document.getElementById("dato1");
let rotulo1 = document.getElementById("rotulo1");
let btnEnv = document.getElementById("btnEnviar");

rotulo1?.innerHTML = "Ingrese un Número";

btnEnv?.addEventListener("click", () => {
  let numero: number = Number(dato1.value);
  if (numero % 2 == 0 && numero != 0) {
    console.log("El número ingresado es Par");
  } else if (numero % 2 != 0) {
    console.log("El número ingresado es Impar");
  } else if (numero == 0) {
    console.log("El número ingresado es 0");
  }
});
