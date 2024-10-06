const objetoAnimais = require("./animais.json");

const novoAnimal = {
  id: 4,
  nome: "Girafa",
  tipo: "Mamifero",
  habitat: "Savana",
};

objetoAnimais.animais.push(novoAnimal);

objetoAnimais.animais[2].habitat = "Planicies da India";
objetoAnimais.animais.splice(1, 1);

const stringAnimais = JSON.stringify(objetoAnimais);
console.log(stringAnimais);

function copiaObjetoJson(objeto) {
  return JSON.parse(JSON.stringify(objeto));
}

const pessoa = {
  id: 1,
  nome: "Mateus",
  idade: 20,
};

const pessoaModificada = copiaObjetoJson(pessoa);

pessoaModificada.idade = 19;

console.log("Pessoa Original:");
console.log(pessoa);
console.log("Pessoa Modificada:");
console.log(pessoaModificada);
