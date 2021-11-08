import Entrada from "../services/number-text.input";

import { ClientModel } from "../models";
import { CpfModel } from "../shared/models";

export default class ClientController {
  private clients: Array<ClientModel>;
  private input: Entrada;

  constructor(clients: Array<ClientModel>) {
    this.clients = clients;
    this.input = new Entrada();
  }

  findClient(cpfNumber: string) {
    const clientFiltered = this.clients.filter(
      (client) => client.getCpf.getValor === cpfNumber
    );

    if (clientFiltered.length == 0) {
      console.log("Cliente não encontrado, tente novamente!");
      cpfNumber = this.input.receberTexto(
        `Por favor informe o número do cpf: `
      );
      return this.findClient(cpfNumber);
    }
    return clientFiltered[0];
  }

  public create(): void {
    console.log("\nInício do cadastro do cliente");
    let name = this.input.receberTexto(`Por favor informe o nome do cliente: `);
    let email = this.input.receberTexto(
      "Por favor informe o email do cliente: "
    );
    let nomeSocial = this.input.receberTexto(
      "Por favor informe o nome social do cliente: "
    );
    let cpfNumber = this.input.receberTexto(
      "Por favor informe o número do cpf: "
    );
    let data = this.input.receberTexto(
      "Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: "
    );
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    let dataEmissao = new Date(ano, mes, dia);
    let cpf = new CpfModel(cpfNumber, dataEmissao);
    let client = new ClientModel(name, nomeSocial, email, cpf);
    this.clients.push(client);
    console.log("\nCadastro concluído :)\n");
  }

  public index(): void {
    console.log(`\nLista de todos os clientes:`);
    this.clients.forEach((client) => {
      console.log(`Nome: ${client.name}`);
      console.log(`Nome social: ${client.nomeSocial}`);
      console.log(`CPF: ${client.getCpf.getValor}`);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }

  public show(): void {
    let cpfNumber = this.input.receberTexto(
      `Por favor informe o número do cpf: `
    );

    const client: ClientModel = this.findClient(cpfNumber);
    console.log(`Nome: ${client.name}`);
    console.log(`Nome social: ${client.nomeSocial}`);
    console.log(`CPF: ${client.getCpf.getValor}`);
    console.log(`--------------------------------------`);
    console.log(`\n`);
  }

  public put(): void {
    let cpfNumber = this.input.receberTexto(
      `Por favor informe o número do cpf: `
    );

    const client: ClientModel = this.findClient(cpfNumber);
    let name = this.input.receberTexto(`Atualizar nome do cliente: `);
    let email = this.input.receberTexto(`Atualizar email do cliente: `);
    const payload = { email, name };
    client.updateInfo = payload;
    console.log(`\n`);
  }

  public delete(): void {
    let cpfNumber = this.input.receberTexto(
      `Por favor informe o número do cpf: `
    );

    const client: ClientModel = this.findClient(cpfNumber);

    console.log(client);
    console.log(`\n`);
  }
}
