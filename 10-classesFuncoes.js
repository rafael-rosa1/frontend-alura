//Objeto Livro

// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Código",
//     paginas: 185,
//     anunciar: function() {
//         console.log("A Alura indica o livro " + this.nome + "!")
//     }
// }

// Livro.anunciar()

// Função livro usada antes do JS ter classes

// const Livro = function(nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }

//     this.getEditora = function() {
//         return gEditora
//     }

//     this.getPaginas = function() {
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143)

// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

///////////////////////////////////////////////////////////////

// Usando classes no JS

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
        anunciarTitulo() {
            console.log(`Título: ${this.nome}`)
        }
        descreverTitulo() {
            console.log(`${this.nome} é um Livro da editora ${this.editora} e tem ${this.paginas} páginas!`)
        }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de programação", "Comece a programar")

LogicaDeProgramacao.descreverColecao()