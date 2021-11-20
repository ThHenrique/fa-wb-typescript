import { BusinessModel, Client, Product, Service } from "../../models";
import api from "../services/api";

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
    // const clientsDefault = Promise.resolve(this.clientsDefault());

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

    // clientsDefault.forEach((client) => {
    //   const newClient = new Client(
    //     client.email,
    //     client.name,
    //     client.CPF,
    //     client.birthDate,
    //     client.gender,
    //     client.phones
    //   );
    //   this.clientList.push(newClient);
    // });
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

  // async clientsDefault() {
  //   try {
  //     const { data } = await api.get("/users");
  //     console.log(data);

  //     return data;
  //   } catch (error) {}
  // }
}
