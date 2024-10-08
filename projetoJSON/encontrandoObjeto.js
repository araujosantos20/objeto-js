// const estudantes = require("./estudantes.json");

// function buscandoEstudante(lista, chave, valor) {
//   return lista.find((estudante) => estudante[chave].includes(valor));
// }

// const encontrandoEstudante = buscandoEstudante(
//   estudantes,
//   "telefone",
//   "5896279799"
// );
// console.log(encontrandoEstudante);

// const estudantes = require("./estudantes.json");

// function filtrarEndereco(lista, propriedade) {
//   return lista.filter((estudante) => {
//     return !estudante.endereco.hasOwnProperty(propriedade);
//   });
// }

// const utilizarFuncao = filtrarEndereco(estudantes, "cep");
// console.log(utilizarFuncao);

// const estudantes = require("./estudantes.json");

// function ordenarEstudantes(lista, propriedade) {
//   return lista.sort((a, b) => {
//     if (a[propriedade] > b[propriedade]) return 1;
//     if (a[propriedade] < b[propriedade]) return -1;
//     return 0;
//   });
// }

// const ordenar = ordenarEstudantes(estudantes, "nome");
// console.log(ordenar);

const biblioteca = [
  { id: 1, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
  {
    id: 2,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
  },
  {
    id: 3,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
  },
];

// Função para encontrar 1 item do array de acordo com o número do ID
function encontrarIdLivro(id) {
  return biblioteca.find((livro) => livro.id === id) || null;
}

const encontrarLivro = encontrarIdLivro(4);
console.log(encontrarLivro);

const catalogoFilmes = [
  { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
  {
    id: 2,
    titulo: "Jurassic Park",
    diretor: "Steven Spielberg",
    anoLancamento: 1993,
  },
  {
    id: 3,
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010,
  },
  {
    id: 4,
    titulo: "The Godfather",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1999,
  },
];

// Função para filtrar o filmes de acordo com um ano especifico
function filtrarFilmesPorAno(ano) {
  return catalogoFilmes.filter((filme) => filme.anoLancamento === ano);
}

const filmeDoAno = filtrarFilmesPorAno(1999);
console.log(filmeDoAno);

const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 },
];

// Função para ordenar em ordem crescente ou descrescente a lista de produtos
// de acordo com o preco
function filtrarOrdenarProdutosPorPreco(maxpreco) {
  const produtosFiltrados = listaProdutos.filter(
    (lista) => lista.preco >= maxpreco
  );
  return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const ordenarPorPreco = filtrarOrdenarProdutosPorPreco(25.0);
console.log(ordenarPorPreco);

const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
];

function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
  return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}

const crescente = ordenarAnimais(compararIdadeCrescente);
console.log(crescente);
const decrescente = ordenarAnimais(compararIdadeDecrescente);
console.log(decrescente);

const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
    ],
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" },
    ],
  },
];

function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(
      (funcionario) => funcionario.id === id
    );
    if (funcionarioEncontrado) {
      return funcionarioEncontrado;
    }
  }
  return null;
}

const encontrarIdFuncionario = encontrarFuncionarioPorId(201);
console.log(encontrarIdFuncionario);
