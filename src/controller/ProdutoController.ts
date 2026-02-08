import Produto from "../model/Produto";
import ProdutoRepository from "../repository/ProdutoRepository";

export default class ProdutoController implements ProdutoRepository {

    private produtos: Array<Produto> = new Array<Produto>();
    private id: number = 0;

    public criar(produto: Produto): void {
        this.produtos.push(produto);
        this.produtos[this.produtos.length-1].visualizar();
        console.log("\n Produto adicionado! \n")

    }
    public listarTodos(): void {
        this.produtos.forEach(p => p.visualizar());
    }
    public encontrarPorId(id: number): void {
        const produtoEncontrado = this.produtos.find(p => p.id === id);
        if (!produtoEncontrado) {
            console.log(`\n Produto com id ${id} não foi encontrado\n`);

        } else {
            produtoEncontrado.visualizar();
        }
    }

    public atualizar(produto: Produto): void {
       const indice = this.produtos.findIndex(p => p.id === produto.id);
       this.produtos[indice]=produto;

       console.log("\n Produto adicionado com sucesso! \n");
       this.produtos[indice].visualizar();
    }

    public deletar(id: number): void {
        if(!this.produtoExists(id)) {console.log(`\nProduto de Id ${id} não existe\n`); return;}

        const produtoRemovido = this.produtos.splice(this.produtos.findIndex(p => p.id === id),1);
        
        produtoRemovido[0].visualizar();
        console.log("\n Produto excluído com sucesso! \n");
    }

    public gerarId(): number{
        return ++this.id;
    }

    public produtoExists(id: number): boolean {
        return this.produtos.some((p)=> p.id === id );
    }

    public encontrarPorNome(nome: string): void {
        const produtos: Array<Produto> = this.produtos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
        if(produtos.length === 0) {console.log(`\n Não foi encontrado nenhum produto com nome: ${nome}.\n`);return;}
        produtos.forEach(p=> p.visualizar());
    }
    
    

}

