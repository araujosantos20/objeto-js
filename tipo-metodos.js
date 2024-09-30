// Agora vamos utilizar alguns métodos de objetos

const novoObjeto = {
  nome: "Mateus",
  sobrenome: "Santos",
  solteiro: true,
  cpf: "12345678911",
  anoNascimento: 2004,
};

// Aqui pedimos para ele retornar apenas as chaves do objeto
// Com o Object.keys() em forma de array.
let chaves = Object.keys(novoObjeto);
console.log(chaves);

// Aqui iremos pedir para ele apenas retornar os valores do objeto
// Com o Object.values() em forma de array.
let valores = Object.values(novoObjeto);
console.log(valores);

// Aqui iremos pedir para ele retornar todas as entradas
// Com o Object.entries() fazendo cada chave e valor
// Retornar em um array para cada conjunto.
let entradas = Object.entries(novoObjeto);
console.log(entradas);

// Também podemos juntar diversos objetos em apenas um só
// Utilizando o método Object.assign()
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
let objeto3 = { e: 5, f: 6 };

let fusao = Object.assign(objeto1, objeto2, objeto3);
console.log(fusao);
