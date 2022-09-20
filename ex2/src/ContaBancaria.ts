interface NewContaBancaria{
    nome:string;
    idade:number;
    senha:number;
    quantidade:number;
}

class ContaBancaria{
    public nome: string;
   public idade: number;
   public senha: number;
   public quantidade: number;

   constructor(nome:string, idade:number, senha:number, quantidade:number){
    this.nome= nome;
    this.idade = idade;
    this.senha = senha;
    this.quantidade = quantidade; 
   }

   public depositar (quantidade:number){
    this.quantidade + quantidade
   }
}

export {ContaBancaria}