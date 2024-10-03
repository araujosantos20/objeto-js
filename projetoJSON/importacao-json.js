// Chamando a nosso arquivo JSON
const estudante = require("./estudante.json");

console.log(estudante.idade);

// Para transformar o arquivo em uma string
const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// Este formato serve para podermos jogar ele em
// Uma estrutura http, mas não conseguimos utilizar
// Os dados neste formato, então na hora de importar
// ou utilizar o require, vamos utilizar outro método

const objEstudante = JSON.parse(estudante);
console.log(objEstudante);
// Com isso conseguimos converter o arquivo de uma enorme
// string para um objeto e poder manipular os dados
