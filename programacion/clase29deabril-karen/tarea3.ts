let dato1 = document.getElementById ("dato1");
let dato2 = document.getElementById ("dato2");
let dato3 = document.getElementById ("dato3");

let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");
let rotulo3 = document.getElementById ("rotulo3");

let btnEnv = document.getElementById ("btnEnviar");

rotulo1.innerHTML = "Ingrese precio Unitario"
rotulo2.innerHTML = "Ingrese la cantidad de productos"
rotulo3.innerHTML = "Ingrese el mes de su compra, en minuscula"

btnEnv.addEventListener("click", () => {
let precio: number = Number (dato1.value);
let cantidad: number = Number (dato2.value);
let mes: string = dato3.value;

let total: number = precio*cantidad;

let descuento: number = total*0.15;
let totalcondescuento: number =0;


if (mes == "octubre"){
  totalcondescuento = total-descuento;
  console.log("Felicitaciones, has hecho una compra en nuestro mes de Celebración, Obtuviste un descuento del 15%");
  console.log("Su total a pagar es de" totalcondescuento);

}else{
 console.log ("Su total a pagar es de" total);

}
});
