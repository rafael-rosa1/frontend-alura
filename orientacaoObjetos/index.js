class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor
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
contaCorrenteRafael.saldo = 0
contaCorrenteRafael.agencia = 1001

console.log(contaCorrenteRafael.saldo)
contaCorrenteRafael.saldo = 100
console.log(contaCorrenteRafael.saldo)
contaCorrenteRafael.sacar(520)

console.log(contaCorrenteRafael.saldo)

console.log(cliente1)
console.log(cliente2)