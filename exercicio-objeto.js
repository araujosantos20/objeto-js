// const pessoa = {
//   nome: "Mateus",
//   notas: [10, 8, 8, 6],
//   //   Nesta função vamos utilizar o método reduce, onde ele irá
//   // pegar cada item da chave notas e somando cada valor dessa lista
//   // e no final retornar o valor da lista somada divido pelo tamanho da lista.
//   calcularMediaNotas: function (notas) {
//     const calculo = notas.reduce((nota, soma) => nota + soma, 0);
//     return calculo / notas.length;
//   },
//   //   Aqui apenas vamos pegar o valor que irá retornar da média que será
//   // calculada do método acima e conforme o valor, vamos retornar um breve
//   // texto dizendo como está seu desempenho
//   classificarDesempenho: function (calcularMediaNotas) {
//     if (calcularMediaNotas >= 9) {
//       return "Desempenho excelente";
//     } else if (calcularMediaNotas >= 7.6) {
//       return "Bom desempenho";
//     } else if (calcularMediaNotas >= 6.1) {
//       return "Desempenho regular";
//     } else {
//       return "Desempenho insuficiente";
//     }
//   },
// };

// const calculoMedia = pessoa.calcularMediaNotas(pessoa.notas);
// const desempenho = pessoa.classificarDesempenho(calculoMedia);

// console.log(calculoMedia);
// console.log(desempenho);

const carro = {
  marca: "Ford",
  modelo: "Mustang GT",
  ano: 2022,
  cor: "Vermelho",
  motor: "V8 5.0L",
  tetoSolar: true,
};

for (car in carro) {
  let chave = car;
  let valor = carro[car];
  console.log(`${chave}: ${valor}`);
}
