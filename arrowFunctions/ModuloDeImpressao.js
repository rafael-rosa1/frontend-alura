export class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }


    imprime(nomes) {
        nomes.forEach(nome => {
            console.log(`${this._codigo}: ${nome}`);
        });
    }
}