export class ContaCorrente {
    agencia;
    _saldo = 0;  // qual um atributo tiver o _(underline) antes do nome ele é privado, não se deve mexer nele fora da classe
                // Há uma proposta de usar o # mas ainda não foi incluida na linguagem oficialmente
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
}