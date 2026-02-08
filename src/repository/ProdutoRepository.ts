import Produto from "../model/Produto";

export default interface ProdutoRepository {

    criar(produto: Produto): void;
    listarTodos(): void;
    encontrarPorId(id: number): void;
    encontrarPorNome(nome: string):void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    produtoExists(id:number):boolean;
}