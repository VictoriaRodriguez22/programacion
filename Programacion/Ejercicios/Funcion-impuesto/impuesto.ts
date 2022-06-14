let precio: number = Number(prompt("Ingrese el precio del producto"));
let porcentaje: number = Number(prompt("Ingrese el porcentaje"));

function impuesto(valor: number, porcentaje: number): number {
  let suma: number = 0;
  suma = valor + porcentaje;
  return suma;
}

console.log(impuesto(precio, porcentaje));
