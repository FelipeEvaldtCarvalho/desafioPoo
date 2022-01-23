/* --------------ESTRUTURA----------------*/

// Crie uma classe Cozinha
class Cozinha {
    /**
     * @param {number} horaAbertura 
     * @param {number} horaFechamento 
     * @param {string} nome 
     * @param {string} pratoPrincipal 
     */
    constructor(horaAbertura, horaFechamento, nome, pratoPrincipal) {
        this.horaAbertura = horaAbertura;
        this.horaFechamento = horaFechamento;
        this.nome = nome;
        this.pratoPrincipal = pratoPrincipal;                
    }
}
// Crie uma classe Ingrediente
class Ingrediente { 
    /**
     * @param {string} nome 
     * @param {dateTime} validade 
     */
    constructor(nome, validade) {
        this.nome = nome;
        this.validade = validade;
    }
}
// Adicione uma lista de Ingredientes na Classe cozinha
Cozinha.prototype.ingredientes = new Array();
//Crie um método na classe Cozinha que retorne quantos ingredientes possui na Cozinha
Cozinha.prototype.retornaQtddIngred = function() {return this.ingredientes.length;} 

/* ---------------DESAFIO---------------------------*/

//Criar uma instância da classe Cozinha - Cozinha Mineira
var feijao = new Ingrediente('Feijão', new Date('02-23-2022'));
var farinha = new Ingrediente('Farinha', new Date('03-25-2022'));
var arroz = new Ingrediente('Arroz', new Date('02-23-2022'));
var carnePorco = new Ingrediente('Carne de porco', new Date('01-29-2022'));
var linguiça = new Ingrediente('Liquiça', new Date('01-29-2022'));
var cozinhaMineira = new Cozinha(14, 20, 'Cozinha mineira', 'Feijoada');
cozinhaMineira.ingredientes = [ feijao, farinha, arroz, carnePorco, linguiça ];
//Criar uma instância da classe Cozinha - Cozinha Chinesa
var champignon = new Ingrediente('Champignon', new Date('01-28-2022'));
var brocolis = new Ingrediente('Brócolis', new Date('02-07-2022'));
var macarrao = new Ingrediente('Macarrão', new Date('04-22-2022'));
var carne = new Ingrediente('Carne', new Date('29-01-2022'));
var cozinhaChinesa = new Cozinha(10, 23, 'Cozinha chinesa', 'Yakissoba');
cozinhaChinesa.ingredientes = [ champignon, brocolis, macarrao, carne ];