"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Patinete_1 = require("./Patinete");
var prompt = PromptSync();
var marca = prompt('Digite a marca: ');
var modelo = prompt('Digite o modelo: ');
var quantidade = Number(prompt('Digite a quantidade de patinetes que você tem: '));
var patinete = new Patinete_1.Patinete(marca, modelo, quantidade);
var qntVenda = Number(prompt('Digite a quantidade que quer vender: '));
patinete.venda(qntVenda);
console.log("A ".concat(patinete.marca, ", modelo ").concat(patinete.modelo, "\n Restaram: ").concat(patinete.quantidade));
