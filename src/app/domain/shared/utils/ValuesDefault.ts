import { BusinessModel, Client, Product, Service } from "../../models";
import { Phone } from "../models";
import Random from "./randomId";

export class ValuesDefault {
  private business: BusinessModel;
  private serviceList: Array<Service>;
  private productList: Array<Product>;
  private clientList: Array<Client>;

  constructor(business: BusinessModel) {
    this.business = business;
    this.serviceList = business.services;
    this.productList = business.products;
    this.clientList = business.clients;
  }

  public create(): void {
    const servicesDefault = this.serviceDefault();
    const productsDefault = this.productsDefault();
    const clientsDefault = this.clientsDefault();

    servicesDefault.forEach((service) => {
      const newService = new Service(service.id, service.name, service.price);
      this.serviceList.push(newService);
    });

    productsDefault.forEach((product) => {
      const newProduct = new Product(
        product.id,
        product.name,
        product.price,
        product.total
      );
      this.productList.push(newProduct);
    });

    clientsDefault.forEach((client) => {
      const phoneList: Phone[] = [];

      client.phones.forEach(({ ddd, number }) => {
        phoneList.push(new Phone(ddd, number));
      });
      const id = Random(Date.now());
      const newClient = new Client(
        id,
        client.email,
        client.name,
        client.CPF,
        client.birthDate,
        client.gender,
        phoneList
      );
      this.clientList.push(newClient);
    });
  }

  serviceDefault() {
    const services = [
      { id: 1, name: "Manicure", price: 25.99 },
      { id: 2, name: "Pedicure", price: 15.99 },
      { id: 3, name: "Design de Sobrancelhas", price: 20 },
      { id: 4, name: "Corte de Cabelo", price: 69.99 },
      { id: 5, name: "Pintura de cabelos", price: 55.9 },
      { id: 6, name: "Remoção de rugas", price: 110.9 },
      { id: 7, name: "Remoção de manchas na pele", price: 74.99 },
      { id: 8, name: "Aplicação botox", price: 999.9 },
      { id: 9, name: "Tratamento para emagrecimento", price: 2990.9 },
      { id: 10, name: "Redução de medidas", price: 1499.99 },
    ];
    return services;
  }

  productsDefault() {
    const products = [
      { id: 1, name: "Shampoo", price: 59.99, total: 46 },
      { id: 2, name: "Condicionador", price: 49.9, total: 39 },
      { id: 3, name: "Máscara de tratamento", price: 19.9, total: 60 },
      { id: 4, name: "Demaquilante", price: 29.9, total: 22 },
      { id: 5, name: "Hidratante para pele", price: 20.9, total: 50 },
      { id: 6, name: "Sabonete", price: 9.9, total: 90 },
      { id: 7, name: "Cera de depilar", price: 30, total: 100 },
      { id: 8, name: "Unhas postiças", price: 12.9, total: 70 },
      { id: 9, name: "Mega Hear", price: 110.9, total: 20 },
      { id: 10, name: "Henna tinta de sobrancelha", price: 24.9, total: 7 },
    ];
    return products;
  }

  clientsDefault() {
    const clients = [
      {
        email: "thiago@email.com",
        name: "Thiago Ferreira",
        CPF: "123",
        birthDate: new Date("08/24/2001"),
        gender: "M",
        phones: [
          { ddd: 12, number: 931223211 },
          { ddd: 12, number: 31213111 },
        ],
      },
      {
        email: "nelson@email.com",
        name: "Nelson Ferreira",
        CPF: "321",
        birthDate: new Date("07/11/1999"),
        gender: "M",
        phones: [
          { ddd: 12, number: 432567843 },
          { ddd: 12, number: 78457332 },
        ],
      },
      {
        email: "henrique@email.com",
        name: "Henrique Moura",
        CPF: "111",
        birthDate: new Date("01/01/2002"),
        gender: "M",
        phones: [
          { ddd: 12, number: 649863412 },
          { ddd: 12, number: 23568606 },
        ],
      },
      {
        email: "MariaElena@email.com",
        name: "Maria Elena",
        CPF: "1234",
        birthDate: new Date("01/24/2001"),
        gender: "F",
        phones: [
          { ddd: 12, number: 74889714 },
          { ddd: 12, number: 98554100 },
        ],
      },
      {
        email: "LuizBrito@email.com",
        name: "Luiza Brito",
        CPF: "1112",
        birthDate: new Date("07/11/1999"),
        gender: "F",
        phones: [
          { ddd: 12, number: 74449668 },
          { ddd: 12, number: 745522100 },
        ],
      },
      {
        email: "gatinhabonitinha@email.com",
        name: "Ana Clara",
        CPF: "11113",
        birthDate: new Date("04/01/2002"),
        gender: "F",
        phones: [
          { ddd: 12, number: 44599822 },
          { ddd: 12, number: 99856641 },
        ],
      },
    ];
    return clients;
  }
}
