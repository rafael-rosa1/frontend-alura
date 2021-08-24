import {Cliente} from "./Cliente.js" 
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Rafael", "111.222.333-44")
const cliente2 = new Cliente("Ivana", "333.444.555-66")


const contaCorrenteRafael = new ContaCorrente(cliente1, 100)
const conta2 = new ContaCorrente(cliente2, 102)


contaCorrenteRafael.depositar(500)
conta2.depositar(200)
contaCorrenteRafael.transferir(100, conta2)

console.log(conta2)
console.log(contaCorrenteRafael)

