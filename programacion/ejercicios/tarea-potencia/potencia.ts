let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("btnEnviar");

let contador: number;
let resultado: number = 1;

rotulo1.innerHTML = "Ingrese la Base";
rotulo2.innerHTML = "Ingrese el exponente";

btnEnviar.addEventListener("click", () => {
  let potenciadeunNumero = () => {
    let base: number = Number(dato1.value);
    let exponente: number = Number(dato2.value);

    if (exponente === 0) {
      resultado = 1;
      console.log("la potencia es", resultado);
    } else if (exponente > 0) {
      for (contador = 1; contador <= exponente; contador++) {
        resultado = resultado * base;
      }
      console.log("La potencia es", resultado);
    } else {
      console.log("El exponente es menor que 0, intente con otro valor");
    }
  };
  potenciadeunNumero();
});
