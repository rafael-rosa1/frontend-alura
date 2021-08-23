class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;  // qual um atributo tiver o _(underline) antes do nome ele é privado, não se deve mexer nele fora da classe
                // Há uma proposta de usar o # mas ainda não foi incluida na linguagem oficialmente
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
        }
    }
}


const cliente1 = new Cliente()
cliente1.nome = "Rafael"
cliente1.cpf = "11122233344"

const cliente2 = new Cliente()
cliente2.nome = "Ivana"
cliente2.cpf = "33344455566"

const contaCorrenteRafael = new ContaCorrente()
contaCorrenteRafael.agencia = 1001


contaCorrenteRafael.depositar(100)
contaCorrenteRafael.sacar(50)

console.log(contaCorrenteRafael)
