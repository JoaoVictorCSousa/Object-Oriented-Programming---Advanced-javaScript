var Paciente = /** @class */ (function () {
    function Paciente(nome, idade, doenca) {
        this.doenca = [];
        this.nome = nome;
        this.idade = idade;
    }
    Paciente.prototype.salaVermelha = function (grave) {
        this.doenca.push(grave);
    };
    return Paciente;
}());
var paciente = new Paciente('Son Goku', 19, 'Ebola');
paciente.salaVermelha('PERIGO! ENCAMINHE PARA A SALA VERMELHA');
console.log(paciente);
