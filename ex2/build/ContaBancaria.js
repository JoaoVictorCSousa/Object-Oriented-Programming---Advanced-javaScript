"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, idade, senha, quantidade) {
        this.nome = nome;
        this.idade = idade;
        this.senha = senha;
        this.quantidade = quantidade;
    }
    ContaBancaria.prototype.depositar = function (quantidade) {
        this.quantidade + quantidade;
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
