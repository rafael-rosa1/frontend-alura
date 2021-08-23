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

contaCorrenteRafael.depositar(100)
const valorSacado = contaCorrenteRafael.sacar(50)
console.log(`Valor sacado: ${valorSacado}`)

console.log(contaCorrenteRafael)
