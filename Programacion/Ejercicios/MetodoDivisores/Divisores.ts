let rotulo1 = document.getElementById("rotulo1");
let dato1 = document.getElementById("dato1");
let btnEnviar = document.getElementById("btnEnviar");

rotulo1.innerHTML = "Ingrese un Número";


btnEnviar.addEventListener("click", () => {
  let cantidadDeDivisores = () => {
    let numero1: number = Number(dato1.value);
    let contador: number = 1;
    let suma: number =0;

    for (contador = 1, contador <= numero1, contador ++){
 
    if (numero1 / contador == 0) {
     suma = suma + contador
     console.log ("La cantidad de divisores es" + suma);

      } else {
      }
      }
    }
  };

  cantidadDeDivisores();


/*
me dice que cantidadDeDivisores no esta definida*/

  