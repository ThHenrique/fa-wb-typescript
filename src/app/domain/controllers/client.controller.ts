import Input from "../services/Number-text.input";

import { BusinessModel, Client as ClientModel } from "../models";
import { Phone } from "../shared/models";

export default class ClientController {
  private input: Input;
  private clientList: Array<ClientModel>;
  private business: BusinessModel;

  constructor(business: BusinessModel) {
    this.input = new Input();
    this.clientList = business.clients;
    this.business = business;
  }

  findClient(cpfNumber: string) {
    const clientFiltered = this.clientList.filter(
      (client) => client.getCpf() === cpfNumber
    );

    if (clientFiltered.length == 0) {
      console.log("Cliente não encontrado, tente novamente!");
      cpfNumber = this.input.text(`Por favor informe o número do cpf: `);
      return this.findClient(cpfNumber);
    }
    return clientFiltered[0];
  }

  public create(): void {
    console.log("\nInício do cadastro do cliente");

    const name = this.input.text(`Nome completo: `);
    const email = this.input.text("Email: ");
    const cpfNumber = this.input.text("CPF: ");
    const gender = this.input.text("Sexo (Masculino - Feminino - Outro): ");
    const birthDate = this.input.text("Data de nascimento (Mês/Dia/Ano): ");

    const ddd = this.input.number("Número (DDD): ");
    const number = this.input.number("Número: ");
    const phoneList: Phone[] = [];

    phoneList.push(new Phone(ddd, number));
    const birthDateAux = new Date(birthDate);

    const client = new ClientModel(
      email,
      name,
      cpfNumber,
      birthDateAux,
      gender,
      phoneList
    );

    this.clientList.push(client);
    console.log("\nCadastro concluído :)\n");
  }

  public index(): void {
    console.log(`\nLista de todos os clientes:`);
    this.clientList.forEach((client) => {
      console.log(`
      Nome: ${client.name}
      CPF: ${client.getCpf()}
      --------------------------------------`);
    });
    console.log(`\n`);
  }

  public show(): void {
    let cpfNumber = this.input.text(`Por favor informe o número do cpf: `);

    const client: ClientModel = this.findClient(cpfNumber);
    console.log(`
    Nome: ${client.name}
    CPF: ${client.getCpf()}
    --------------------------------------`);
    console.log(`\n`);
  }

  public put(): void {
    let cpfNumber = this.input.text(`Por favor informe o número do cpf: `);

    const client: ClientModel = this.findClient(cpfNumber);
    let name = this.input.text(`Atualizar nome do cliente: `);
    let email = this.input.text(`Atualizar email do cliente: `);
    const payload = { email, name };
    client.updateInfo = payload;
    console.log(`\n`);
  }

  public delete(): void {
    let cpfNumber = this.input.text(`Por favor informe o número do cpf: `);

    const client: ClientModel = this.findClient(cpfNumber);

    const clientListUpdated = this.clientList.filter(
      (clientRemoved: ClientModel) => {
        return clientRemoved.getCpf() !== client.getCpf();
      }
    );

    this.business.setListClient(clientListUpdated);
    console.log(`\n`);
  }
}
