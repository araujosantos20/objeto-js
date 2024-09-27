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

const pessoas = {
  nome: ["Mateus", "Murilo", "João"],
  idade: [20, 19, 18],
  cidade: ["Santo André", "São Paulo", "São Paulo"],
};

pessoas.nome.push("Tiago");
pessoas.idade.push(37);
pessoas.cidade.push("Ribeirão Preto");

function mostrarListaPessoas(pessoas) {
  let mostrar = `
   Nome: ${pessoas.nome[0]}
   Idade: ${pessoas.idade[0]}
   Cidade: ${pessoas.cidade[0]}
   Nome: ${pessoas.nome[1]}
   Idade: ${pessoas.idade[1]}
   Cidade: ${pessoas.cidade[1]}
   Nome: ${pessoas.nome[2]}
   Idade: ${pessoas.idade[2]}
   Cidade: ${pessoas.cidade[2]}
   Nome: ${pessoas.nome[3]}
   Idade: ${pessoas.idade[3]}
   Cidade: ${pessoas.cidade[3]}`


   return mostrar;
};

let visualizar = mostrarListaPessoas(pessoas);

console.log(visualizar);
