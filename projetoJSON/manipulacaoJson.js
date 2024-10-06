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
