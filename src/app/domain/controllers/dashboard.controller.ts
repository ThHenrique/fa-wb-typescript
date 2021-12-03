import Input from "../services/Number-text.input";

import { BusinessModel, Client, Product, Service, Order } from "../models";

import groupBy from "../shared/utils/groupBy";

export class DashboardController {
  private input: Input;
  private clientList: Array<Client>;
  private productList: Array<Product>;
  private serviceList: Array<Service>;
  private business: BusinessModel;

  constructor(business: BusinessModel) {
    this.input = new Input();
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

  public getClientsDESC(): void {
    const report: Array<{ name: string; consumer: number }> =
      this.clientList.map((client) => {
        let countServiceAndProduct = 0;
        client.orders.forEach((order) => {
          order.productList?.forEach(() => countServiceAndProduct++);
          order.serviceList?.forEach(() => countServiceAndProduct++);
        });
        return { name: client.name, consumer: countServiceAndProduct };
      });

    const compare = (a, b) => {
      if (a.consumer < b.consumer) return -1;
      if (a.consumer > b.consumer) return 1;
      return 0;
    };
    report.sort(compare);
    report.reverse();
    report.slice(0, 9);
    console.log("Clientes que MAIS consumiram - TOP 10 \n");
    report.forEach((client, index) => {
      console.log(`${index + 1} - ${client.name}, Consumo: ${client.consumer}`);
    });
    console.log();
  }

  public getClientsASC(): void {
    const report: Array<{ name: string; consumer: number }> =
      this.clientList.map((client) => {
        let countServiceAndProduct = 0;
        client.orders.forEach((order) => {
          order.productList?.forEach(() => countServiceAndProduct++);
          order.serviceList?.forEach(() => countServiceAndProduct++);
        });
        return { name: client.name, consumer: countServiceAndProduct };
      });

    const compare = (a, b) => {
      if (a.consumer < b.consumer) return -1;
      if (a.consumer > b.consumer) return 1;
      return 0;
    };
    report.sort(compare);
    const top10 = report.slice(0, 10);
    console.log("Clientes que MENOS consumiram - TOP 10 \n");
    report.forEach((client, index) => {
      console.log(`${index + 1} - ${client.name}, Consumo: ${client.consumer}`);
    });
    console.log();
  }

  public getClientsInValueDESC(): void {
    const format = {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    };

    const report: Array<{ name: string; valueConsumer: number }> =
      this.clientList.map((client) => {
        let valueServiceAndProductConsumer = 0;
        client.orders.forEach((order) => {
          console.log(order);
          valueServiceAndProductConsumer += order.order_amount;
        });
        return {
          name: client.name,
          valueConsumer: valueServiceAndProductConsumer,
        };
      });

    const compare = (a, b) => {
      if (a.valueConsumer < b.valueConsumer) return -1;
      if (a.valueConsumer > b.valueConsumer) return 1;
      return 0;
    };
    report.sort(compare);
    report.reverse();
    const top5 = report.slice(0, 5);
    console.log("Clientes que MAIS gastaram $$ - TOP 5 \n");
    top5.forEach((client, index) => {
      console.log(
        `${index + 1} - ${
          client.name
        }, Valor Total: ${client.valueConsumer.toLocaleString("pt-BR", format)}`
      );
    });
    console.log();
  }

  public getClientsPerGender(): void {
    const clientList = this.clientList;
    const compare = (a, b) => {
      if (a.gender > b.gender) return -1;
      if (a.gender < b.gender) return 1;
      return 0;
    };
    clientList.sort(compare);

    console.log("Clientes por GÊNERO \n");
    clientList.forEach((client) => {
      console.log(
        `Nome: ${client.name}, Sexo: ${client.gender} - CPF: ${client.getCpf()}`
      );
    });
    console.log();
  }
  public getProductsAndServices(): void {}
  public getProductsAndServicesPerGender(): void {}
}
