class Paciente{
    public nome:string;
    public idade: number;
    public doenca: string[] = [];

    constructor(nome:string, idade: number, doenca:string){
        this.nome = nome
        this.idade = idade
    

    }

    public salaVermelha(grave: string){
        this.doenca.push(grave);
    }
}

const paciente = new Paciente('Son Goku',19,'Ebola');

paciente.salaVermelha('PERIGO! ENCAMINHE PARA A SALA VERMELHA');

console.log(paciente);
