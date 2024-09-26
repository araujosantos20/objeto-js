const pessoa = {
  nome: "Mateus",
  idade: 20,
  solteiro: true,
  hobbies: ["Futebol", "Video Game", "Estudar", "Assistir videos engraçados"],
};

pessoa.endereco = {
  rua: "Rua Amazonas",
  cidade: "São Jorge",
  estado: "São Paulo",
};

function mostrarInfoPessoa(pessoa) {
  mostrar = `Nome ${typeof pessoa.nome}: ${pessoa.nome}
    Idade ${typeof pessoa.idade}: ${pessoa.idade}
    Solteiro ${typeof pessoa.solteiro}: ${pessoa.solteiro}
    Hobbies ${typeof pessoa.hobbies}: ${pessoa.hobbies.join(", ")}
    Endereço ${typeof pessoa.endereco}: 
    Rua ${typeof pessoa.endereco.rua}: ${pessoa.endereco.rua}
    Cidade ${typeof pessoa.endereco.rua}: ${pessoa.endereco.cidade}
    Estado ${typeof pessoa.endereco.rua}: ${pessoa.endereco.estado}`;

  return mostrar;
}

console.log(mostrarInfoPessoa(pessoa));
