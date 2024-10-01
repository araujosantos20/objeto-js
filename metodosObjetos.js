const carro = {
  marca: "Ford",
  modelo: "Mustang GT",
  ano: 2022,
  cor: "Vermelho",
};

carro.ligado = false;
ligar = function (ligado) {
  if (!ligado) {
    ligado = true;
    console.log("O carro está ligado");
  } else if (ligado) {
    console.log("O carro já está ligado, não tem como ligar novamente");
  }
};
desligar = function (ligado) {
  if (ligado) {
    ligado = false;
    console.log("O carro está desligado");
  } else if (!ligado) {
    console.log("O carro já está desligado, não tem como desligar novamente");
  }
};

obterDetalhes = function (carro) {
  console.log(`Marca: ${carro.marca}
        Modelo: ${carro.modelo}
        Ano: ${carro.ano}
        Cor: ${carro.cor}
        Ligado: ${carro.ligado}`);
};

obterDetalhes(carro);
desligar(carro.ligado);
ligar(carro.ligado);

Object.defineProperty(carro, "placa", {
  value: "ABC1234",
  enumerable: false,
});

if (Object.keys(carro)) {
  for (car in carro) {
    console.log(`${car}: ${carro[car]}`);
  }
}
