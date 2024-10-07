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

function filtrarOrdenarProdutosPorPreco(propriedade) {
  return listaProdutos.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
  });
}

const ordenarPorPreco = filtrarOrdenarProdutosPorPreco("preco");
console.log(ordenarPorPreco);
