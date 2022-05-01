let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");


let btnEnv = document.getElementById ("btnEnviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");



rotulo1?.innerHTML = "Cantidad de productos";
rotulo2?.innerHTML = "Precio del producto";


btnEnv?.addEventListener ("click", () => {
let cantidad: number = Number(dato1.value);
let precio: number = Number(dato2.value);
let preciototal: number = precio*cantidad;

if (preciototal > 1000){
  preciototal = preciototal*0.9;
  console.log("Felicitaciones obtuviste un descuento del 10%");
  console.log ("Su total a pagar es de $" preciototal);
} else {
  console.log ("Su total a pagar es de $" preciototal);
}

});

