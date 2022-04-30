let dato = document.getElementById("dato");
let btnEnv = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  let datoExtraido: number = Number(dato.value);

  if (datoExtraido > 20) {
    console.log("El número es mayor que 20");
  } else {
    console.log("El número es menor o igual que 20");
  }
});
