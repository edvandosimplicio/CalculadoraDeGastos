//primeira variável é para entrada de valor por mês
var valorUm = document.querySelector("#primeiro-valor");

//segunda variável é para entrada de valor por hora
var valorDois = document.querySelector("#segundo-valor");

//quarta variável é para entrada de das horas por dias trabalhados
var resposta = document.querySelector("#resposta");

function calcularValorHora() {
  var calcGastos = valorUm.valueAsNumber - valorDois.valueAsNumber;

  resposta.textContent = calcGastos;
}
