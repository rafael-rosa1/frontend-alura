import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Rafael", "111.222.333-44");

const contaCorrenteRafael = new ContaCorrente(cliente1, 1001);

contaCorrenteRafael.depositar(500);
contaCorrenteRafael.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const conta = new Conta(0, cliente1, 1001)

console.log(contaPoupanca);
console.log(contaCorrenteRafael);
