interface NewPatinete {
    marca: string;
    modelo: string;
    quantidade: number;
}

class Patinete{
    public marca: string;
    public modelo: string;
    public quantidade: number;

    constructor(marca: string, modelo:string, quantidade: number ){
        this.marca = marca;
        this.modelo = modelo;
        this.quantidade = quantidade;
    }

    public venda (quantidade:number){
        this.quantidade -= quantidade
    }
}

    export{Patinete};