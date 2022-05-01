let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnv = document.getElementById ("btnEnviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");
let rotulo3 = document.getElementById ("rotulo3");


rotulo1?.innerHTML = "Primer número";
rotulo2?.innerHTML = "Segundo número";
rotulo3.innerHTML = "Tercer número"

btnEnv?.addEventListener ("click", () => {
let primernumero: number = Number(dato1.value);
let segundonumero: number = Number(dato2.value);
let tercernumero: number = Number(dato3.value);

if(primernumero>segundonumero && primernumero>tercernumero){
  console.log("El mayor número es" primernumero);
} else if (segundonumero>primernumero && segundonumero>tercernumero){
  console.log("El mayor número es" segundonumero);
} else if (tercernumero>primernumero && tercernumero>segundonumero){
  console.log("El mayor número es" tercernumero);
}
});

