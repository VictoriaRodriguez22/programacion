let dato1 = document.getElementById("dato1");

let btnEnv = document.getElementById("btnEnviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1?.innerHTML = "Posicion en la carrera";

btnEnv?.addEventListener("click", () => {
  let posicion: number = Number(dato1.value);

  if (posicion == 1) {
    console.log("obtuvo medalla de oro");
  } else if (posicion == 2) {
    console.log("obtuvo medalla de plata");
  } else if (posicion == 3) {
    console.log("obtuvo medalla de bronce");
  } else {
    console.log("obtuvo certificado de participación");
  }
});
