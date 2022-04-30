let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");

let btnEnv = document.getElementById ("btnEnviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");
let rotulo1 = document.getElementById ("rotulo3");
let rotulo2 = document.getElementById ("rotulo4");


rotulo1?.innerHTML = "Tiempo de la Vuelta Número 1";
rotulo2?.innerHTML = "Tiempo de la Vuelta Número 2";
rotulo3?.innerHTML = "Tiempo de la Vuelta Número 3";
rotulo4?.innerHTML = "Tiempo de la Vuelta Número 4";

btnEnv?.addEventListener ("click", () => {
let vuelta1: number = Number(dato1.value);
let vuelta2: number = Number(dato2.value);
let vuelta3: number = Number(dato3.value);
let vuelta4: number = Number(dato4.value);

let tiempototal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;

let promediodevuelta: number = tiempototal/4;

console.log("El tiempo total de las vueltas es" tiempototal);
console.log("El promedio total de vueltas es de" promediodevuelta);

});

