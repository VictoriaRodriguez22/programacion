let dato1 = document.getElementById("dato1")
let dato2 = document.getElementById("dato2")

let btnEnv = document.getElementById ("btnEnviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");

rotulo1?.innerHTML = "Ingrese precio del producto";

rotulo2?.innerHTML = "Ingrese descuento a aplicar";


btnEnv?.addEventListener ("click", () => {
let precio: number = Number(dato1.value);
let porcentaje: number = Number(dato2.value);

let descuento: number = precio*porcentaje/100;
let preciofinal: number = precio - descuento;
console.log("Su compra es de $" preciofinal);

});

