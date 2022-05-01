let dato1 = document.getElementById("dato1");
let rotulo1 = document.getElementById("rotulo1");
let btnEnv = document.getElementById ("btnEnviar");

rotulo1.innerHTML = "Ingrese su Sueldo actual";

btnEnv.addEventListener("click", () =>{
let sueldo: number = Number (dato1.value);
let aumento: number = 0;
let nuevosalario: number =0;


if (0<sueldo<=15000){
  aumento = sueldo*0.20;
  nuevosalario = sueldo + aumento;
  console.log("Su Nuevo salario es de" nuevosalario);

}else if(sueldo>15001 && sueldo<=20000){
  aumento = sueldo*0.10;
  nuevosalario = sueldo + aumento;
  console.log("Su Nuevo salario es de" nuevosalario);

}else if(sueldo>20001 && sueldo<=25000){
  aumento = sueldo*0.05;
  nuevosalario = sueldo + aumento;
  console.log("Su Nuevo salario es de" nuevosalario);

}else if(sueldo>25000){
  nuevosalario = sueldo;
  console.log("Su Nuevo salario es de" nuevosalario);
}

});