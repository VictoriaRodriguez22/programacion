let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("btnEnviar");

rotulo1.innerHTML = "Ingrese un Número";
rotulo2.innerHTML = "Ingrese otro Número";

btnEnviar.addEventListener("click", () => {
  let multiplos = () => {
    let numero1: number = Number(dato1.value);
    let numero2: number = Number(dato2.value);
    let contador: number = 0;

    if (numero1 <= numero2) {
      contador = contador + 1;
      if (numero2 / contador == numero1) {
        console.log("Verdadero", numero1, "es divisible por", numero2);
      } else {
        console.log("Falso", numero1, "no es divisible por", numero2);
      }
    }
    console.log("Falso", numero2, "no puede ser multiplo", numero1);
  };
  multiplos();
});
//no esta terminado. aun sigo pensando razonamiento
