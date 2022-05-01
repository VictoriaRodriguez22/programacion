let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnv = document.getElementById("btnEnviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1?.innerHTML = "Ingrese Usuario";
rotulo2?.innerHTML = "Ingrese su contraseña";

btnEnv?.addEventListener("click", () => {
  let usuario: string = "Juan";
  let contraseña: string = "claveJuan";

  let usuarioIngresado: string = dato1.value;
  let contraseñaIngresada: string = dato2.value;

  if (usuario == usuarioIngresado && contraseña == contraseñaIngresada) {
    console.log("Usted ha ingresado correctamente");
  } else {
    console.log("Usuario o contraseña incorrecta");
  }
});
