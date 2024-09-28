// const pessoa = {
//   nome: "Mateus",
//   idade: 20,
//   solteiro: true,
//   hobbies: ["Futebol", "Video Game", "Estudar", "Assistir videos engraçados"],
// };

// pessoa.endereco = {
//   rua: "Rua Amazonas",
//   cidade: "São Jorge",
//   estado: "São Paulo",
// };

// function mostrarInfoPessoa(pessoa) {
//   mostrar = `Nome ${typeof pessoa.nome}: ${pessoa.nome}
//     Idade ${typeof pessoa.idade}: ${pessoa.idade}
//     Solteiro ${typeof pessoa.solteiro}: ${pessoa.solteiro}
//     Hobbies ${typeof pessoa.hobbies}: ${pessoa.hobbies.join(", ")}
//     Endereço ${typeof pessoa.endereco}: 
//     Rua ${typeof pessoa.endereco.rua}: ${pessoa.endereco.rua}
//     Cidade ${typeof pessoa.endereco.rua}: ${pessoa.endereco.cidade}
//     Estado ${typeof pessoa.endereco.rua}: ${pessoa.endereco.estado}`;

//   return mostrar;
// }

// console.log(mostrarInfoPessoa(pessoa));

// const pessoas = [
//   { nome: "Mateus", idade: 20, cidade: "Santo André" },
//   { nome: "Murilo", idade: 19, cidade: "São Paulo" },
//   { nome: "João", idade: 18, cidade: "São Paulo" },
// ];

// function mostrarListaPessoas(pessoas) {
//   console.log("Lista de Pessoas: ");
//   pessoas.forEach(pessoa => {
//     console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade} anos, Cidade: ${pessoa.cidade}`);
//   });
// };

// mostrarListaPessoas(pessoas);

// pessoas.push({nome: "Tiago", idade: 27, cidade: "Ribeirão Preto"});
// pessoas.push({nome: "Thales", idade: 23, cidade: "São Paulo"});

// mostrarListaPessoas(pessoas);

// function filtrarPorCidade(pessoas, cidade) {
//   return pessoas.filter(pessoa => pessoa.cidade === cidade);
// };

// console.log("Pessoas de São Paulo:");
// console.log(filtrarPorCidade(pessoas, "São Paulo"));


const calculadora = {
  soma: function(n1, n2) {
    return n1 + n2;
  },
  subtracao: function(n1, n2) {
    return n1 - n2;
  },
  multiplicacao: function(n1, n2) {
    return n1 * n2;
  },
  divisao: function(n1, n2) {
    return n1 / n2;
  },
  calcularMedia: function(lista) {
    const soma = lista.reduce((total, numero) => total + numero, 0);
    return soma / lista.length;
  },
};

console.log("Resultados das operações é:");
console.log(`Soma: ${calculadora.soma(3, 3)}`);
console.log(`Subtração: ${calculadora.subtracao(3, 3)}`);
console.log(`Multiplicação: ${calculadora.multiplicacao(3, 3)}`);
console.log(`Divisão: ${calculadora.divisao(3, 3)}`);

const lista = [10, 4, 30, 15, 6, 7];
console.log(calculadora.calcularMedia(lista));