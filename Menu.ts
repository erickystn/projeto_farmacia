
import Medicamento from "./src/model/Medicamento";
import Cosmetico from "./src/model/Cosmetico";
import Produto from "./src/model/Produto";
import rls from "readline-sync";
import ProdutoController from "./src/controller/ProdutoController";


if (process.platform === "win32") {
    require("child_process").execSync("chcp 65001");
}

const tiposProduto = ["Medicamento", "Cosmético"];
const produtoController = new ProdutoController();
const listaOpcoes = [
    "Criar Produto",
    "Listar todas os Produtos",
    "Buscar Produto por Numero",
    "Atualizar dados de Produto",
    "Apagar Produto",
    "Buscar Produto por Nome"
];
let escolha: number;

export function main() {

    produtoController.criar(new Medicamento(produtoController.gerarId(), "Agua Oxigenada", 29.98, "Peroxido de Hidrogenio"));
    produtoController.criar(new Cosmetico(produtoController.gerarId(), "Pó Compacto", 32, "Morango"));


    while (true) {
        console.clear();

        console.log("******** Farmácia Generation *******");
        escolha = rls.keyInSelect(listaOpcoes, `Escolha uma opção: `) + 1;

        if (escolha === 0) {
            console.log("\nFarmácia - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }


        switch (escolha) {
            case 1: {
                console.log("\n   Novo Produto por Numero  \n");
                const produto: Produto | null = preencheObjeto();
                if (produto) produtoController.criar(produto);
                keyToContinue();
                break;

            }
            case 2: {
                console.log("\n    Listar Todos os Produtos   \n ");
                produtoController.listarTodos();
                keyToContinue();
                break;
            }
            case 3: {
                console.log("\n    Buscar Produto por Numero   \n ");
                const id = rls.questionInt("Digite o numero do produto que deseja buscar: ");
                produtoController.encontrarPorId(id);
                keyToContinue();
                break;
            }
            case 4: {
                console.log("\n    Atualizar dados de Produto   \n ");

                const idProduto = rls.questionInt("Digite o id do produto a ser atualizado: ");

                if (produtoController.produtoExists(idProduto)) {

                    const produto: Produto | null = preencheObjeto();
                    if (produto) { produtoController.atualizar(produto); }
                } else {
                    console.log(`Produto com id ${idProduto} não encontrado! `);
                }
                keyToContinue();
                break;
            }
            case 5: {
                console.log("\n    Apagar Produto   \n ");
                const id = rls.questionInt("Digite o numero do produto que deseja excluir: ");
                produtoController.deletar(id);
                keyToContinue();
                break;
            }
            case 6: {
                console.log("\n   Buscar Produto por Nome   \n ");
                const nomeABuscar = rls.question("Digite o nome que você deseja encontrar: ");
                produtoController.encontrarPorNome(nomeABuscar);
                keyToContinue();
                break;
            }
            default: {
                console.log("\n   Opção Inválida!  \n "); break;
            }
        }
    }
}

function preencheObjeto(): Produto | null {

    const nome = rls.question("Digite o nome do Produto: ");
    const preco = rls.questionFloat("Digite o preço do produto: ");
    const tipo = rls.keyInSelect(tiposProduto, " Escolha o tipo de produto:  ", { cancel: false }) + 1;
    switch (tipo) {
        case 1: {
            const generico = rls.question("Digite o tipo de dados generico: ");
            return new Medicamento(produtoController.gerarId(), nome, preco, generico);
        }
        case 2: {
            const fragancia = rls.question("Digite o tipo de fragância: ");
            return new Cosmetico(produtoController.gerarId(), nome, preco, fragancia);
        }
    }
    return null;

}

function keyToContinue() {
    rls.question("Aperte Enter para continuar... ", {

        hideEchoBack: true
    })
}

function sobre(): void {
    console.log(
        `
         ${"*".repeat(40)}
           Projeto desenvolvido por:
           Ericky Santana - eriicky@live.com
           github.com/erickystn
         ${"*".repeat(40)}
        `,
    );
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    rls.prompt();
}

main();

