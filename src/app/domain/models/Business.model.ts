import { Client, Product, Service, Order } from "./index";

export default class Business {
  private _clientList: Array<Client>;
  private _productList: Array<Product>;
  private _services: Array<Service>;
  private _orders: Array<Order>;

  constructor() {
    this._clientList = [];
    this._productList = [];
    this._services = [];
    this._orders = [];
  }

  public get clients() {
    return this._clientList;
  }
  public get products() {
    return this._productList;
  }
  public get services() {
    return this._services;
  }

  public get orders() {
    return this._orders;
  }

  public setListClient(clientsUpdated: Array<Client>) {
    this._clientList = clientsUpdated;
  }

  public setListProduct(productUpdated: Array<Product>) {
    this._productList = productUpdated;
  }

  public setListServices(serviceUpdated: Array<Service>) {
    this._services = serviceUpdated;
  }

  public setListOrder(ordersUpdated: Array<Order>) {
    this._orders = ordersUpdated;
  }
}
