let numero: number = Number(prompt("Ingrese un Número deseado"));

function azar(numero: number): number {
  return Math.floor(Math.random() * numero);
}

azar(numero);
