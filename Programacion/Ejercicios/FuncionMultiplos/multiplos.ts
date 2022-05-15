let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("btnEnviar");

rotulo1.innerHTML = "Ingrese un Número";
rotulo2.innerHTML = "Ingrese otro Número";

btnEnviar.addEventListener("click", () => {
  let esMultiplos = () => {
    let numero1: number = Number(dato1.value);
    let numero2: number = Number(dato2.value);
 
    if (numero2 % numero1 == 0) {
     console.log ("Verdadero", numero2,  "es múltiplo de", numero1);

      } else {
        console.log("Falso", numero2, "no es múltiplo de", numero1);
      }
  };
  esMultiplos();
