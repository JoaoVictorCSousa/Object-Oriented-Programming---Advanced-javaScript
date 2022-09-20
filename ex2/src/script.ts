import PromptSync= require('prompt-sync');
import { ContaBancaria } from './ContaBancaria';

const prompt = PromptSync()

const nome = prompt('Digite seu nome: ');
const idade = Number(prompt('Digite sua idade: '));
const senha = Number(prompt('Digite sua senha: '));
const quantidade = Number(prompt('Digite a quantidade que você tem atualmente: '));

const contabancaria = new ContaBancaria(nome,idade,senha,quantidade);

const contaDeposito = Number(prompt('Digite a quantidade que deseja depositar: '));

contabancaria.depositar

console.log(`${nome}\n ${idade}\n ${senha}\n Total na conta após depósito: ${contabancaria.quantidade}`);
