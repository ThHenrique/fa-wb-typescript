import Listagem from "./listagem";

import { ClientModel } from "../models";

export default class ListagemClientes extends Listagem {
    private clientes: Array<ClientModel>
    constructor(clientes: Array<ClientModel>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.name);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}