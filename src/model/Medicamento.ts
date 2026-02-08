import Produto from "./Produto";

export default class Medicamento extends Produto {
    private _generico: string;
    /**
     * Getter $generico
     * @return {string}
     */
    public get generico(): string {
        return this._generico;
    }

    /**
     * Setter $generico
     * @param {string} value
     */
    public set generico(value: string) {
        this._generico = value;
    }


    constructor(id: number, nome: string, preco: number , generico: string) {
        //Como o Produto já Medicamento, 
        // eu nao vou exigir do usuario que ele defina o tipo
        super(id, nome, 1, preco);
        this._generico = generico;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Genérico: ${this._generico}            
            `)
    }


}

