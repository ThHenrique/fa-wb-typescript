import { BusinessModel, Client, Order, Product, Service } from "../../models";
import { Phone } from "../models";
import { random } from "./randomId";
import { findClient } from "./search.service";

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
      const id = random(Date.now());
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

    const ordersDefault = this.ordersDefault();
    ordersDefault.forEach((order) => {
      const client: Client = findClient(this.clientList, order.clientId);
      const productCartList: Array<{ product: Product; unit: number }> = [];
      const serviceCartList: Array<{ service: Service; unit: number }> = [];
      order.productCartList.forEach((product, index) => {
        const productPivot = {
          product: product,
          unit: order.productUnit[index],
        };
        productCartList.push(productPivot);
      });
      order.serviceCartList.forEach((service, index) => {
        const servicePivot = { service: service, unit: 1 };
        serviceCartList.push(servicePivot);
      });
      const id = random(Date.now());
      const newOrder = new Order(
        id,
        order.clientId,
        order.dateCreated,
        order.statusPayment,
        order.seller_id,
        order.seller_commission,
        productCartList,
        serviceCartList
      );
      const clientOrders: Order[] = client.orders;
      clientOrders.push(newOrder);

      client.orders = clientOrders;
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
        gender: "Masculino",
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
        gender: "Masculino",
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
        gender: "Masculino",
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
        gender: "Feminino",
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
        gender: "Feminino",
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
        gender: "Feminino",
        phones: [
          { ddd: 12, number: 44599822 },
          { ddd: 12, number: 99856641 },
        ],
      },
    ];
    return clients;
  }

  ordersDefault() {
    const timestamp = new Date();
    const orderList = [
      {
        clientId: 321,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 2,
        seller_commission: 3,
        productCartList: this.productList.slice(1, 3),
        serviceCartList: this.serviceList.slice(0, 1),
        productUnit: [4, 5],
      },
      {
        clientId: 111,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 1,
        seller_commission: 3,
        productCartList: this.productList.slice(5, 7),
        serviceCartList: this.serviceList.slice(4, 5),
        productUnit: [4, 7],
      },
      {
        clientId: 111,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 1,
        seller_commission: 3,
        productCartList: this.productList.slice(5, 7),
        serviceCartList: this.serviceList.slice(4, 5),
        productUnit: [1, 2],
      },
      {
        clientId: 111,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 1,
        seller_commission: 3,
        productCartList: this.productList.slice(0, 1),
        serviceCartList: this.serviceList.slice(2, 3),
        productUnit: [3],
      },
      {
        clientId: 1234,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 3,
        seller_commission: 3,
        productCartList: this.productList.slice(1, 3),
        serviceCartList: this.serviceList.slice(3, 4),
        productUnit: [3, 2],
      },
      {
        clientId: 1112,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 3,
        seller_commission: 3,
        productCartList: this.productList.slice(7, 9),
        serviceCartList: this.serviceList.slice(6, 7),
        productUnit: [4, 1],
      },
      {
        clientId: 11113,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 2,
        seller_commission: 3,
        productCartList: this.productList.slice(6, 9),
        serviceCartList: this.serviceList.slice(8, 9),
        productUnit: [1, 4, 1],
      },
      {
        clientId: 1112,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 3,
        seller_commission: 3,
        productCartList: this.productList.slice(5, 9),
        serviceCartList: this.serviceList.slice(3, 4),
        productUnit: [3, 2, 4, 1],
      },
      {
        clientId: 1112,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 3,
        seller_commission: 3,
        productCartList: this.productList.slice(2, 7),
        serviceCartList: this.serviceList.slice(0, 1),
        productUnit: [1, 1, 1, 1, 2, 1],
      },
      {
        clientId: 1112,
        dateCreated: timestamp,
        statusPayment: "pending",
        seller_id: 3,
        seller_commission: 3,
        productCartList: this.productList.slice(7, 9),
        serviceCartList: this.serviceList.slice(4, 5),
        productUnit: [1, 1],
      },
    ];

    return orderList;
  }
}
