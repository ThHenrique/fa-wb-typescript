import Input from "../services/Number-text.input";

import { BusinessModel, Client, Product, Service, Order } from "../models";

import groupBy from "../shared/utils/groupBy";

export class DashboardController {
  private input: Input;
  private orderList: Array<Order>;
  private clientList: Array<Client>;
  private productList: Array<Product>;
  private serviceList: Array<Service>;
  private business: BusinessModel;

  constructor(business: BusinessModel) {
    this.input = new Input();
    this.orderList = business.orders;
    this.clientList = business.clients;
    this.productList = business.products;
    this.serviceList = business.services;
    this.business = business;
  }

  actionsDashboard() {
    console.log(
      `\n
      Opções de DASHBOARD: 
      1 - Clientes que MAIS consumiram - TOP 10
      2 - Clientes que MENOS consumiram - TOP 10
      3 - Clientes que MAIS consumiram R$ - TOP 5
      4 - Clientes por GÊNERO
      5 - Produtos/Serviços mais consumidos
      6 - Produtos/Serviços mais consumidos por GÊNERO
      0 - Voltar ao menu principal \n
      `
    );

    let clientOption = this.input.number(
      `Por favor, escolha uma opção da DASHBOARD: `
    );
    switch (clientOption) {
      case 0:
        return;
      // break;
      case 1:
        this.getClientsDESC();
        break;
      case 2:
        this.getClientsASC();
        break;
      case 3:
        this.getClientsInValueDESC();
        break;
      case 4:
        this.getClientsPerGender();
        break;
      case 5:
        this.getProductsAndServices();
        break;
      case 6:
        this.getProductsAndServicesPerGender();
        break;
      default:
        console.log(`Operação não entendida :(`);
    }
  }

  public getClientsASC(): void {
    // 1 - Clientes que MAIS consumiram - TOP 10
    console.log(this.orderList);
  }
  public getClientsDESC(): void {}
  public getClientsInValueDESC(): void {}
  public getClientsPerGender(): void {}
  public getProductsAndServices(): void {}
  public getProductsAndServicesPerGender(): void {}
}
