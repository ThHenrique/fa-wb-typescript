import Entrada from "./domain/services/number-text.input";

import { BusinessModel } from "./domain/models";

import ClientController from "./domain/controllers/client.controller";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new BusinessModel();
let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Listar todos os clientes`);
  console.log(`3 - Atualizar um cadastro`);
  console.log(`4 - Mostrar usuário`);
  console.log(`0 - Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      let newClient = new ClientController(empresa.getClientes);
      newClient.create();
      break;
    case 2:
      let listClients = new ClientController(empresa.getClientes);
      listClients.index();
      break;
    case 3:
      let updateClient = new ClientController(empresa.getClientes);
      updateClient.put();
      break;
    case 4:
      let client = new ClientController(empresa.getClientes);
      client.show();
      break;
    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
