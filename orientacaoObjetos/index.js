import {Cliente} from "./Cliente.js" 
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = "Rafael"
cliente1.cpf = "11122233344"

const cliente2 = new Cliente()
cliente2.nome = "Ivana"
cliente2.cpf = "33344455566"

const contaCorrenteRafael = new ContaCorrente()
contaCorrenteRafael.agencia = 1001
contaCorrenteRafael.cliente = cliente1
contaCorrenteRafael.depositar(500)

const conta2 = new ContaCorrente()
conta2.cliente = cliente1
conta2.agencia = 102
conta2.depositar(200)

console.log(conta2)
console.log(conta2.saldo)

