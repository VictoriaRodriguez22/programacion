let dato1 = document.getElementById("dato1");

let btnEnv = document.getElementById("btnEnviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1?.innerHTML = "Altura de la persona en metros";

btnEnv?.addEventListener("click", () => {
  let altura: number = Number(dato1.value);

  if (altura > 1.3) {
    console.log("Puede subir al juego");
  } else {
    console.log(
      "Su Altuira no es suficiente para subir al juego, lo sentimos!"
    );
  }
});
