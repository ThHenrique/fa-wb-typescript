import { Client, Product, Service, Order } from "../models";
import Input from "./Number-text.input";

const input = new Input();

const findClient = (clientList: Array<Client>) => {
  let cpfNumber = input.text(`Informe o CPF do cliente: `);

  const clientFiltered = clientList.filter(
    (client) => client.getCpf() === cpfNumber
  );

  if (clientFiltered.length == 0) {
    console.log("Cliente não encontrado, tente novamente!");
    return findClient(clientList);
  }
  return clientFiltered[0];
};

const findProduct = (productList: Array<Product>) => {
  let productCode = input.number(`Código do Produto: `);

  const productFiltered = productList.filter(
    (product) => product.id === productCode
  );

  if (productFiltered.length == 0) {
    console.log("Produto não encontrado, tente novamente!");
    return findProduct(productList);
  }
  return productFiltered[0];
};

const findService = (serviceList: Array<Service>) => {
  let serviceCode = input.number(`Código do serviço: `);

  const serviceFiltered = serviceList.filter(
    (service) => service.id === serviceCode
  );

  if (serviceFiltered.length == 0) {
    console.log("Serviço não encontrado, tente novamente!");
    return findService(serviceList);
  }
  return serviceFiltered[0];
};

const findOrder = (orderList: Array<Order>) => {
  let orderCode = input.number(`Código do PEDIDO: `);

  const orderFiltered = orderList.filter((order) => order.id === orderCode);

  if (orderFiltered.length == 0) {
    console.log("Pedido não encontrado, tente novamente!");
    return findOrder(orderList);
  }
  return orderFiltered[0];
};

export { findClient, findProduct, findService, findOrder };
