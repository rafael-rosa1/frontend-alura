import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    _cliente;
    _saldo = 0;  // qual um atributo tiver o _(underline) antes do nome ele é privado, não se deve mexer nele fora da classe
    // Há uma proposta de usar o # mas ainda não foi incluida na linguagem oficialmente
    
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente
    }
    get saldo(){
        return this._saldo
    }
    constructor(cliente, agencia){
        this.agencia = agencia
        this.cliente = cliente
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }
    depositar(valor) {
        if (valor <= 0) return
        this._saldo += valor
    }
    transferir(valor, outraConta) {
        const valorSacado = this.sacar(valor)
        outraConta.depositar(valorSacado)
    }
}