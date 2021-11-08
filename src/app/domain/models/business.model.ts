import { ClientModel, ProductModel, ServiceModel } from "./index";

export default class Business {
  private clientes: Array<ClientModel>;
  private produtos: Array<ProductModel>;
  private servicos: Array<ServiceModel>;
  constructor() {
    this.clientes = [];
    this.produtos = [];
    this.servicos = [];
  }
  public get getClientes() {
    return this.clientes;
  }
  public get getProdutos() {
    return this.produtos;
  }
  public get getServicos() {
    return this.servicos;
  }
}
