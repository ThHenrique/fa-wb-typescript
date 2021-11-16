import Input from "./domain/services/Number-text.input";
import BusinessModel from "./domain/models/Business.model";
import ClientController from "./domain/controllers/client.controller";
import ProductController from "./domain/controllers/product.controller";
import ServiceController from "./domain/controllers/service.controller";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let exec = true;
let business = new BusinessModel();

while (exec) {
  console.log(`Opções:`);
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Listar todos os clientes`);
  console.log(`3 - Atualizar cadastro do cliente`);
  console.log(`4 - Mostrar informação de um cliente`);
  console.log(`5 - Remover cliente \n`);
  console.log(`6 - Cadastrar produto`);
  console.log(`7 - Catálogo de produto`);
  console.log(`8 - Buscar produto`);
  console.log(`9 - Atualizar produto`);
  console.log(`10 - Remover produto \n`);
  console.log(`11 - Cadastrar serviço`);
  console.log(`12 - Catálogo de serviço`);
  console.log(`13 - Buscar serviço`);
  console.log(`14 - Atualizar serviço`);
  console.log(`15 - Remover serviço`);
  console.log(`0 - Sair`);

  let input = new Input();
  let inputOption = input.number(`Por favor, escolha uma opção: `);

  switch (inputOption) {
    case 0:
      exec = false;
      console.log(`Até mais`);
      break;
    case 1:
      let newClient = new ClientController(business);
      newClient.create();
      break;
    case 2:
      let listClients = new ClientController(business);
      listClients.index();
      break;
    case 3:
      let updateClient = new ClientController(business);
      updateClient.put();
      break;
    case 4:
      let client = new ClientController(business);
      client.show();
      break;
    case 5:
      const deleteClient = new ClientController(business);
      deleteClient.delete();
      break;
    case 6:
      const newProduct = new ProductController(business);
      newProduct.create();
      break;
    case 7:
      const listProduct = new ProductController(business);
      listProduct.index();
      break;
    case 8:
      const product = new ProductController(business);
      product.show();
      break;
    case 9:
      const updateProduct = new ProductController(business);
      updateProduct.put();
      break;
    case 10:
      const removeProduct = new ProductController(business);
      removeProduct.delete();
      break;
    case 11:
      const newService = new ServiceController(business);
      newService.create();
      break;
    case 12:
      const listService = new ServiceController(business);
      listService.index();
      break;
    case 13:
      const service = new ServiceController(business);
      service.show();
      break;
    case 14:
      const updateService = new ServiceController(business);
      updateService.put();
      break;
    case 15:
      const removeService = new ServiceController(business);
      removeService.delete();
      break;

    default:
      console.log(`Operação não entendida :(`);
  }
}
