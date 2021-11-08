import * as SharedModel from "../shared/models";

import { ProductModel, ServiceModel } from "./index";

export default class Client {
  public name: string;
  public nomeSocial: string;
  private email: string;
  private cpf: SharedModel.CpfModel;
  private rgs: Array<SharedModel.RgModel>;

  private dataCadastro: Date;
  private telefones: Array<SharedModel.PhoneNumberModel>;
  private produtosConsumidos: Array<ProductModel>;
  private servicosConsumidos: Array<ServiceModel>;
  constructor(
    name: string,
    email: string,
    nomeSocial: string,
    cpf: SharedModel.CpfModel
  ) {
    this.name = name;
    this.nomeSocial = nomeSocial;
    this.email = email;
    this.cpf = cpf;
    this.rgs = [];
    this.dataCadastro = new Date();
    this.telefones = [];
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
  }
  public get getCpf(): SharedModel.CpfModel {
    return this.cpf;
  }
  public get getRgs(): Array<SharedModel.RgModel> {
    return this.rgs;
  }
  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }
  public get getTelefones(): Array<SharedModel.PhoneNumberModel> {
    return this.telefones;
  }
  public get getProdutosConsumidos(): Array<ProductModel> {
    return this.produtosConsumidos;
  }
  public get getServicosConsumidos(): Array<ServiceModel> {
    return this.servicosConsumidos;
  }

  public set updateInfo(info: any) {
    this.email = info.email;
    this.name = info.name;
  }
}
