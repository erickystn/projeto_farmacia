import Produto from "./Produto";

export default class Cosmetico extends Produto{

    private _fragrancia: string; 

    constructor(id:number, nome: string, preco: number,fragrancia: string){
        super(id,nome,2,preco);
        this._fragrancia = fragrancia;        
    }


    /**
     * Getter fragrancia
     * @return {string}
     */
	public get fragrancia(): string {
		return this._fragrancia;
	}

    /**
     * Setter fragrancia
     * @param {string} value
     */
	public set fragrancia(value: string) {
		this._fragrancia = value;
	}
    
    public visualizar():void{
        super.visualizar();
        console.log(`Fragrancia: ${this._fragrancia}
            `);
    }

    
   


}