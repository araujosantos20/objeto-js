const pessoa = {
  nome: "Mateus",
  notas: [10, 8, 8, 6],
  calcularMediaNotas: function (notas) {
    const calculo = notas.reduce((nota, soma) => nota + soma, 0);
    return calculo / notas.length;
  },
  classificarDesempenho: function (calcularMediaNotas) {
    if (calcularMediaNotas >= 9) {
      return "Desempenho excelente";
    } else if (calcularMediaNotas >= 7.6) {
      return "Bom desempenho";
    } else if (calcularMediaNotas >= 6.1) {
      return "Desempenho regular";
    } else {
      return "Desempenho insuficiente";
    }
  },
};

const calculoMedia = pessoa.calcularMediaNotas(pessoa.notas);
const desempenho = pessoa.classificarDesempenho(calculoMedia);

console.log(calculoMedia);
console.log(desempenho);
