import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Rafael", "111.222.333-44");

const contaCorrenteRafael = new ContaCorrente(cliente1, 1001);

contaCorrenteRafael.depositar(500);
contaCorrenteRafael.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(200);
contaSalario.sacar(50);

console.log(contaPoupanca);
console.log(contaCorrenteRafael);
console.log(contaSalario);
