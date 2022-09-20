import PromptSync = require('prompt-sync');
import {Patinete} from "./Patinete";

const prompt = PromptSync()

    

    
const marca = prompt('Digite a marca: ')
const modelo = prompt('Digite o modelo: ')
const quantidade = Number(prompt('Digite a quantidade de patinetes que você tem: '))

const patinete = new Patinete(marca, modelo, quantidade)


const qntVenda =Number(prompt('Digite a quantidade que quer vender: '))

patinete.venda(qntVenda)

console.log(`A ${patinete.marca}, modelo ${patinete.modelo}\n Restaram: ${patinete.quantidade}`);




