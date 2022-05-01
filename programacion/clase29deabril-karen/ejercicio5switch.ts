let dato1 = document.getElementById("dato1");

let btnEnv = document.getElementById("btnEnviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1?.innerHTML = "Posicion en la carrera";

btnEnv?.addEventListener("click", () => {
  let posicion: number = Number(dato1.value);

  switch(posicion){
        case 1:
          console.log("Feliitaciones! Gano medalla de ORO;");
          break;
    
        case 2:
          console.log("Feliitaciones! Gano medalla de PLATA;");
          break;
        case 3:
          console.log("Feliitaciones! Gano medalla de BRONCE;");
          break;
        default:
          console.log("Feliitaciones! Recibe certificado de participacion!;");
      }
    });
    
  }