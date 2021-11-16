import Input from "../services/Number-text.input";

import { BusinessModel, Service } from "../models";

export default class ServiceController {
  private input: Input;
  private business: BusinessModel;
  private serviceList: Array<Service>;

  constructor(business: BusinessModel) {
    this.input = new Input();
    this.business = business;
    this.serviceList = business.services;
  }

  generatingServiceCode() {
    if (this.serviceList.length > 0) {
      const lastServiceCode = this.serviceList.at(-1);
      let serviceCode = lastServiceCode?.id;
      if (!serviceCode) return 1;
      return serviceCode + 1;
    }
    return 0;
  }

  findService() {
    let serviceCode = this.input.number(`Código do serviço: `);

    const serviceFiltered = this.serviceList.filter(
      (service) => service.id === serviceCode
    );

    if (serviceFiltered.length == 0) {
      console.log("Serviço não encontrado, tente novamente!");
      return this.findService();
    }
    return serviceFiltered[0];
  }

  public create(): void {
    console.log("\nInício do cadastro de serviço");

    const name = this.input.text(`Nome: `);
    const price = this.input.number(`Preço: `);
    const serviceCode: number = this.generatingServiceCode();
    const service = new Service(serviceCode, name, price);

    this.serviceList.push(service);
    console.log("\nCadastro concluído :)\n");
  }

  public index(): void {
    console.log(`\nCatálogo de serviço:`);
    this.serviceList.forEach((service) => {
      console.log(`
      Código do serviço: ${service.id}
      Nome: ${service.name}
      Preço: R$ ${service.price}
      --------------------------------------`);
    });
    console.log(`\n`);
  }

  public show(): void {
    const service: Service = this.findService();
    console.log(`
    Nome: ${service.name}
    Preço: R$ ${service.price}
    --------------------------------------`);
    console.log(`\n`);
  }

  public put(): void {
    const service: Service = this.findService();
    let price = this.input.number(`Atualizar valor do serviço: `);
    const payload = { price };
    service.update = payload;
    console.log(`\n`);
  }

  public delete(): void {
    const service: Service = this.findService();

    const serviceListUpdated = this.serviceList.filter(
      (serviceRemoving: Service) => {
        return serviceRemoving.id !== service.id;
      }
    );

    this.business.setListServices(serviceListUpdated);
    console.log(`\n`);
  }
}
