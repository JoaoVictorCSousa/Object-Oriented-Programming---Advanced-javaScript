"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patinete = void 0;
var Patinete = /** @class */ (function () {
    function Patinete(marca, modelo, quantidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.quantidade = quantidade;
    }
    Patinete.prototype.venda = function (quantidade) {
        this.quantidade -= quantidade;
    };
    return Patinete;
}());
exports.Patinete = Patinete;
