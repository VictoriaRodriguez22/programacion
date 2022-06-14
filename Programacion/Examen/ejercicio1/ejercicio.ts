

let vendedor: string[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"]
let ventas1: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let ventas2: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let ventas3: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let ventas4: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let ventas5: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 2578, 35525, 34874, 38842, 20562];

//ejercicio 1

//funcion para cargar el arreglo a cada vendedor
function mostrarArreglodeCadaVendedor(ventas: number[], vendedor: string[]){
  let indice: number;
  for (indice = 0; indice < ventas.length; indice++) {
      vendedor[indice] = ventas[indice] + ""
  }
  console.log(vendedor)
}

mostrarArreglodeCadaVendedor(ventas1, vendedor);
mostrarArreglodeCadaVendedor(ventas2, vendedor);
mostrarArreglodeCadaVendedor(ventas3, vendedor);
mostrarArreglodeCadaVendedor(ventas4, vendedor);
mostrarArreglodeCadaVendedor(ventas5, vendedor);


//Ésta función muetra la mayor venta y en que semana y mes fue
function buscarMayorVenta(arreglo: number[]): any {
  let indice: number;
  let ventaMax: number = 0;
  let mesMax: string = " ";
  let semana: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] > ventaMax) {
      ventaMax = arreglo[indice];
      semana = indice;
      }if (indice<=3){
        mesMax= "enero"
    } else{
       if (indice>3 && indice){
         mesMax= "Febrero"
       } else{
         mesMax="Marzo"
       }
  }
  console.log (mesMax, semana, ventaMax);
  return console.log("La mayor venta es " + ventaMax + " y fue en la semana " + semana +  " y el mes de " + mesMax);
}


console.log("la mayor venta de camila fue" + buscarMayorVenta(ventas1));
console.log("la mayor venta de Franco fue" + buscarMayorVenta(ventas2));
console.log("la mayor venta de Sofia fue" + buscarMayorVenta(ventas3));
console.log("la mayor venta de Matias fue" + buscarMayorVenta(ventas4));
console.log("la mayor venta de Agustina fue" + buscarMayorVenta(ventas5));

//ejercicio 2
//Ésta función muetra la menor venta y en que semana y mes fue
function buscarMenorVenta(arreglo: number[]): any {
  let indice: number;
  let ventaMin: number = 0;
  let mesMin: string = " ";
  let semana: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] < ventaMin) {
      ventaMin = arreglo[indice];
      semana = indice;
      }if (indice<=3){
        mesMin= "enero"
    } else{
       if (indice>3 && indice){
         mesMin= "Febrero"
       } else{
         mesMin="Marzo"
       }
  }
  return console.log("La menor venta es " + ventaMin + " y fue en la semana " + semana +  " y el mes de " + mesMin);
}

buscarMenorVenta(ventas1);
buscarMenorVenta(ventas2);
buscarMenorVenta(ventas3);
buscarMenorVenta(ventas4);
buscarMenorVenta(ventas5);

// ejercicio 3 
// Función promedio de ventas en trimestre
function calcularPromedioTrimestal(arreglo: number[]): number {
  let indice: number;
  let suma: number = 0;
  let promedio: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    suma += arreglo[indice];
  }
  promedio = suma / arreglo.length;
  return promedio;
}

console.log("El promedio de las ventas es " + calcularPromedioTrimestal(ventas1));
console.log("El promedio de las ventas es " + calcularPromedioTrimestal(ventas2));
console.log("El promedio de las ventas es " + calcularPromedioTrimestal(ventas3));
console.log("El promedio de las ventas es " + calcularPromedioTrimestal(ventas4));
console.log("El promedio de las ventas es " + calcularPromedioTrimestal(ventas5));



// ejercicio 4 
// Función promedio de ventas en mensual
function calcularPromedioMensual(arreglo: number[]): any {
  let indice: number;
  let sumaEnero: number = 0;
  let sumaFebrero: number =0;
  let sumaMarzo: number =0;
  let promedioEnero: number = 0;
  let promedioFebrero: number = 0;
  let promedioMarzo: number = 0;
  for (indice = 0; indice <= 3; indice++) {
    sumaEnero += arreglo[indice];
  }
  for (indice =4; indice <= 7; indice ++){
    sumaFebrero += arreglo[indice];
  }
   for(indice = 8; indice < arreglo.length; indice ++){
     sumaMarzo += arreglo[indice];
   }
  promedioEnero = sumaEnero / 4;
  promedioFebrero = sumaFebrero / 4;
  promedioMarzo = sumaMarzo / 4;
 
  console.log("El promedio de las ventas en Enero es de " + promedioEnero);
  console.log("El promedio de las ventas en Febrero es de " + promedioFebrero);
  console.log("El promedio de las ventas en Marzo es de " + promedioMarzo);
  
}

console.log(calcularPromedioMensual(ventas1));
console.log(calcularPromedioMensual(ventas2));
console.log(calcularPromedioMensual(ventas3));
console.log(calcularPromedioMensual(ventas4));
console.log(calcularPromedioMensual(ventas5));

//ejercicio 5
// muestra la mejor venta de cada semana
function mejorVentaporsemana(arreglo1: number[], arreglo2:number[], arreglo3: number[], arreglo4: number[], arreglo5: number[], longitud:number){
  let indice: number;
   for(indice =0; indice < longitud; indice++){
     if (arreglo1[indice]>arreglo2[indice] && arreglo1[indice]>arreglo3[indice] && arreglo1[indice]>arreglo4[indice] && arreglo1[indice] > arreglo5[indice]){
       console.log("El mejor monto de la semana " + indice + "es " + arreglo1)
     } else {
       if (arreglo2[indice]>arreglo1[indice] && arreglo2[indice]>arreglo3[indice] && arreglo2[indice]>arreglo4[indice] && arreglo2[indice] > arreglo5[indice]){)
        console.log("El mejor monto de la semana " + indice + "es " + arreglo2)
      } else {
        if (arreglo3[indice]>arreglo1[indice] && arreglo3[indice]>arreglo2[indice] && arreglo3[indice]>arreglo4[indice] && arreglo3[indice] > arreglo5[indice]){)
          console.log("El mejor monto de la semana " + indice + "es " + arreglo3)
      }else {
        if (arreglo4[indice]>arreglo1[indice] && arreglo4[indice]>arreglo2[indice] && arreglo4[indice]>arreglo3[indice] && arreglo4[indice] > arreglo5[indice]){)
          console.log("El mejor monto de la semana " + indice + "es " + arreglo4)
      }else{
    console.log("El mejor monto de la semana " + indice + "es " + arreglo5)
   }
}
      }
    }
  }
}
console.log(mejorVentaporsemana(ventas1, ventas2, ventas3, ventas4, ventas5, 12))

// ejercicio 6 
// suma venta de cada mes
function sumarVentasdeEnero(arreglo: number[]): number{
  let indice: number;
  let sumaEnero: number = 0;
  for (indice = 0; indice <= 3; indice++) {
    sumaEnero += arreglo[indice];
  }
 
  console.log("La suma de Enero es de " + sumaEnero);
return sumaEnero
}

function sumarVentasdeFebrero(arreglo: number[]): number{
  let indice: number;
  let sumaFebrero: number =0;
  for (indice =4; indice <= 7; indice ++){
    sumaFebrero += arreglo[indice];
  }

  console.log("La suma de Enero es de " + sumaFebrero);
return sumaFebrero
}

function sumarVentasdeMarzo(arreglo: number[]): number{
  let indice: number;
  let sumaMarzo: number =0;
   for(indice = 8; indice < arreglo.length; indice ++){
     sumaMarzo += arreglo[indice];
   }
  console.log("La suma de Enero es de " + sumaMarzo);
return sumaMarzo
}

console.log(sumarVentasdeEnero(ventas1));
console.log(sumarVentasdeFebrero(ventas1));
console.log(sumarVentasdeMarzo(ventas1));
console.log(sumarVentasdeEnero(ventas2));
console.log(sumarVentasdeFebrero(ventas2));
console.log(sumarVentasdeMarzo(ventas2));
console.log(sumarVentasdeEnero(ventas3));
console.log(sumarVentasdeFebrero(ventas3));
console.log(sumarVentasdeMarzo(ventas3));
console.log(sumarVentasdeEnero(ventas4));
console.log(sumarVentasdeFebrero(ventas4));
console.log(sumarVentasdeMarzo(ventas4));
console.log(sumarVentasdeEnero(ventas5));
console.log(sumarVentasdeFebrero(ventas5));
console.log(sumarVentasdeMarzo(ventas5));

//funcion que me compare sumas de cada mes
function sumarVentasdelmejorVendedor(arreglo1: number[], arreglo2:number[], arreglo3: number[], arreglo4: number[], arreglo5: number[], longitud:number){
  let indice: number;
   for(indice =0; indice < longitud; indice++){
     if (sumarVentasdeEnero(arreglo1)>sumarVentasdeEnero(arreglo2) && sumarVentasdeEnero(arreglo1)>sumarVentasdeEnero(arreglo3) && sumarVentasdeEnero(arreglo1)>sumarVentasdeEnero(arreglo4) && sumarVentasdeEnero(arreglo1)>sumarVentasdeEnero(arreglo5)){
       suma ++
     } else {
    
}
      }
    }
  }
}